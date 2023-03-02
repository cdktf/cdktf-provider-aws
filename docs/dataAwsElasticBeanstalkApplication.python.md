# `dataAwsElasticBeanstalkApplication` Submodule <a name="`dataAwsElasticBeanstalkApplication` Submodule" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsElasticBeanstalkApplication <a name="DataAwsElasticBeanstalkApplication" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_application aws_elastic_beanstalk_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elastic_beanstalk_application

dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_application#name DataAwsElasticBeanstalkApplication#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_application#id DataAwsElasticBeanstalkApplication#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_application#name DataAwsElasticBeanstalkApplication#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_application#id DataAwsElasticBeanstalkApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elastic_beanstalk_application

dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elastic_beanstalk_application

dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elastic_beanstalk_application

dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.appversionLifecycle">appversion_lifecycle</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList">DataAwsElasticBeanstalkApplicationAppversionLifecycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `appversion_lifecycle`<sup>Required</sup> <a name="appversion_lifecycle" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.appversionLifecycle"></a>

```python
appversion_lifecycle: DataAwsElasticBeanstalkApplicationAppversionLifecycleList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList">DataAwsElasticBeanstalkApplicationAppversionLifecycleList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsElasticBeanstalkApplicationAppversionLifecycle <a name="DataAwsElasticBeanstalkApplicationAppversionLifecycle" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycle.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elastic_beanstalk_application

dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycle()
```


### DataAwsElasticBeanstalkApplicationConfig <a name="DataAwsElasticBeanstalkApplicationConfig" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elastic_beanstalk_application

dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_application#name DataAwsElasticBeanstalkApplication#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_application#id DataAwsElasticBeanstalkApplication#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_application#name DataAwsElasticBeanstalkApplication#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_application#id DataAwsElasticBeanstalkApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsElasticBeanstalkApplicationAppversionLifecycleList <a name="DataAwsElasticBeanstalkApplicationAppversionLifecycleList" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elastic_beanstalk_application

dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference <a name="DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_elastic_beanstalk_application

dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.deleteSourceFromS3">delete_source_from_s3</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxAgeInDays">max_age_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxCount">max_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.serviceRole">service_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycle">DataAwsElasticBeanstalkApplicationAppversionLifecycle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_source_from_s3`<sup>Required</sup> <a name="delete_source_from_s3" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.deleteSourceFromS3"></a>

```python
delete_source_from_s3: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_age_in_days`<sup>Required</sup> <a name="max_age_in_days" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxAgeInDays"></a>

```python
max_age_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_count`<sup>Required</sup> <a name="max_count" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxCount"></a>

```python
max_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.serviceRole"></a>

```python
service_role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsElasticBeanstalkApplicationAppversionLifecycle
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkApplication.DataAwsElasticBeanstalkApplicationAppversionLifecycle">DataAwsElasticBeanstalkApplicationAppversionLifecycle</a>

---



