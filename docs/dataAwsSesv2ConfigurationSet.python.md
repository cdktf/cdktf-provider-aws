# `data_aws_sesv2_configuration_set`

Refer to the Terraform Registory for docs: [`data_aws_sesv2_configuration_set`](https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/sesv2_configuration_set).

# `dataAwsSesv2ConfigurationSet` Submodule <a name="`dataAwsSesv2ConfigurationSet` Submodule" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSesv2ConfigurationSet <a name="DataAwsSesv2ConfigurationSet" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/sesv2_configuration_set aws_sesv2_configuration_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  configuration_set_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.configurationSetName">configuration_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/sesv2_configuration_set#configuration_set_name DataAwsSesv2ConfigurationSet#configuration_set_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/sesv2_configuration_set#id DataAwsSesv2ConfigurationSet#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/sesv2_configuration_set#tags DataAwsSesv2ConfigurationSet#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.configurationSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/sesv2_configuration_set#configuration_set_name DataAwsSesv2ConfigurationSet#configuration_set_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/sesv2_configuration_set#id DataAwsSesv2ConfigurationSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/sesv2_configuration_set#tags DataAwsSesv2ConfigurationSet#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.deliveryOptions">delivery_options</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList">DataAwsSesv2ConfigurationSetDeliveryOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.reputationOptions">reputation_options</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList">DataAwsSesv2ConfigurationSetReputationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.sendingOptions">sending_options</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList">DataAwsSesv2ConfigurationSetSendingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.suppressionOptions">suppression_options</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList">DataAwsSesv2ConfigurationSetSuppressionOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.trackingOptions">tracking_options</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList">DataAwsSesv2ConfigurationSetTrackingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.vdmOptions">vdm_options</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList">DataAwsSesv2ConfigurationSetVdmOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.configurationSetNameInput">configuration_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `delivery_options`<sup>Required</sup> <a name="delivery_options" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.deliveryOptions"></a>

```python
delivery_options: DataAwsSesv2ConfigurationSetDeliveryOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList">DataAwsSesv2ConfigurationSetDeliveryOptionsList</a>

---

##### `reputation_options`<sup>Required</sup> <a name="reputation_options" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.reputationOptions"></a>

```python
reputation_options: DataAwsSesv2ConfigurationSetReputationOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList">DataAwsSesv2ConfigurationSetReputationOptionsList</a>

---

##### `sending_options`<sup>Required</sup> <a name="sending_options" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.sendingOptions"></a>

```python
sending_options: DataAwsSesv2ConfigurationSetSendingOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList">DataAwsSesv2ConfigurationSetSendingOptionsList</a>

---

##### `suppression_options`<sup>Required</sup> <a name="suppression_options" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.suppressionOptions"></a>

```python
suppression_options: DataAwsSesv2ConfigurationSetSuppressionOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList">DataAwsSesv2ConfigurationSetSuppressionOptionsList</a>

---

##### `tracking_options`<sup>Required</sup> <a name="tracking_options" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.trackingOptions"></a>

```python
tracking_options: DataAwsSesv2ConfigurationSetTrackingOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList">DataAwsSesv2ConfigurationSetTrackingOptionsList</a>

---

##### `vdm_options`<sup>Required</sup> <a name="vdm_options" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.vdmOptions"></a>

```python
vdm_options: DataAwsSesv2ConfigurationSetVdmOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList">DataAwsSesv2ConfigurationSetVdmOptionsList</a>

---

##### `configuration_set_name_input`<sup>Optional</sup> <a name="configuration_set_name_input" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.configurationSetNameInput"></a>

```python
configuration_set_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSesv2ConfigurationSetConfig <a name="DataAwsSesv2ConfigurationSetConfig" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  configuration_set_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/sesv2_configuration_set#configuration_set_name DataAwsSesv2ConfigurationSet#configuration_set_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/sesv2_configuration_set#id DataAwsSesv2ConfigurationSet#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/sesv2_configuration_set#tags DataAwsSesv2ConfigurationSet#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/sesv2_configuration_set#configuration_set_name DataAwsSesv2ConfigurationSet#configuration_set_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/sesv2_configuration_set#id DataAwsSesv2ConfigurationSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.16.0/docs/data-sources/sesv2_configuration_set#tags DataAwsSesv2ConfigurationSet#tags}.

---

### DataAwsSesv2ConfigurationSetDeliveryOptions <a name="DataAwsSesv2ConfigurationSetDeliveryOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptions()
```


### DataAwsSesv2ConfigurationSetReputationOptions <a name="DataAwsSesv2ConfigurationSetReputationOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptions()
```


### DataAwsSesv2ConfigurationSetSendingOptions <a name="DataAwsSesv2ConfigurationSetSendingOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptions()
```


### DataAwsSesv2ConfigurationSetSuppressionOptions <a name="DataAwsSesv2ConfigurationSetSuppressionOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptions()
```


### DataAwsSesv2ConfigurationSetTrackingOptions <a name="DataAwsSesv2ConfigurationSetTrackingOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptions()
```


### DataAwsSesv2ConfigurationSetVdmOptions <a name="DataAwsSesv2ConfigurationSetVdmOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptions()
```


### DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions <a name="DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions()
```


### DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions <a name="DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSesv2ConfigurationSetDeliveryOptionsList <a name="DataAwsSesv2ConfigurationSetDeliveryOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName">sending_pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy">tls_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptions">DataAwsSesv2ConfigurationSetDeliveryOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sending_pool_name`<sup>Required</sup> <a name="sending_pool_name" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName"></a>

```python
sending_pool_name: str
```

- *Type:* str

---

##### `tls_policy`<sup>Required</sup> <a name="tls_policy" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy"></a>

```python
tls_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSesv2ConfigurationSetDeliveryOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetDeliveryOptions">DataAwsSesv2ConfigurationSetDeliveryOptions</a>

---


### DataAwsSesv2ConfigurationSetReputationOptionsList <a name="DataAwsSesv2ConfigurationSetReputationOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSesv2ConfigurationSetReputationOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSesv2ConfigurationSetReputationOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetReputationOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.lastFreshStart">last_fresh_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled">reputation_metrics_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptions">DataAwsSesv2ConfigurationSetReputationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_fresh_start`<sup>Required</sup> <a name="last_fresh_start" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.lastFreshStart"></a>

```python
last_fresh_start: str
```

- *Type:* str

---

##### `reputation_metrics_enabled`<sup>Required</sup> <a name="reputation_metrics_enabled" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled"></a>

```python
reputation_metrics_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSesv2ConfigurationSetReputationOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetReputationOptions">DataAwsSesv2ConfigurationSetReputationOptions</a>

---


### DataAwsSesv2ConfigurationSetSendingOptionsList <a name="DataAwsSesv2ConfigurationSetSendingOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSesv2ConfigurationSetSendingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSesv2ConfigurationSetSendingOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetSendingOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.sendingEnabled">sending_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptions">DataAwsSesv2ConfigurationSetSendingOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sending_enabled`<sup>Required</sup> <a name="sending_enabled" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.sendingEnabled"></a>

```python
sending_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSesv2ConfigurationSetSendingOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSendingOptions">DataAwsSesv2ConfigurationSetSendingOptions</a>

---


### DataAwsSesv2ConfigurationSetSuppressionOptionsList <a name="DataAwsSesv2ConfigurationSetSuppressionOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons">suppressed_reasons</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptions">DataAwsSesv2ConfigurationSetSuppressionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `suppressed_reasons`<sup>Required</sup> <a name="suppressed_reasons" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons"></a>

```python
suppressed_reasons: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSesv2ConfigurationSetSuppressionOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetSuppressionOptions">DataAwsSesv2ConfigurationSetSuppressionOptions</a>

---


### DataAwsSesv2ConfigurationSetTrackingOptionsList <a name="DataAwsSesv2ConfigurationSetTrackingOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain">custom_redirect_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptions">DataAwsSesv2ConfigurationSetTrackingOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_redirect_domain`<sup>Required</sup> <a name="custom_redirect_domain" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain"></a>

```python
custom_redirect_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSesv2ConfigurationSetTrackingOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetTrackingOptions">DataAwsSesv2ConfigurationSetTrackingOptions</a>

---


### DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList <a name="DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetrics">engagement_metrics</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions">DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `engagement_metrics`<sup>Required</sup> <a name="engagement_metrics" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetrics"></a>

```python
engagement_metrics: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions">DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions</a>

---


### DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList <a name="DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDelivery">optimized_shared_delivery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions">DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `optimized_shared_delivery`<sup>Required</sup> <a name="optimized_shared_delivery" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDelivery"></a>

```python
optimized_shared_delivery: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions">DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions</a>

---


### DataAwsSesv2ConfigurationSetVdmOptionsList <a name="DataAwsSesv2ConfigurationSetVdmOptionsList" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSesv2ConfigurationSetVdmOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSesv2ConfigurationSetVdmOptionsOutputReference <a name="DataAwsSesv2ConfigurationSetVdmOptionsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_configuration_set

dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.dashboardOptions">dashboard_options</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList">DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.guardianOptions">guardian_options</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList">DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptions">DataAwsSesv2ConfigurationSetVdmOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dashboard_options`<sup>Required</sup> <a name="dashboard_options" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.dashboardOptions"></a>

```python
dashboard_options: DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList">DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList</a>

---

##### `guardian_options`<sup>Required</sup> <a name="guardian_options" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.guardianOptions"></a>

```python
guardian_options: DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList">DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSesv2ConfigurationSetVdmOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2ConfigurationSet.DataAwsSesv2ConfigurationSetVdmOptions">DataAwsSesv2ConfigurationSetVdmOptions</a>

---



