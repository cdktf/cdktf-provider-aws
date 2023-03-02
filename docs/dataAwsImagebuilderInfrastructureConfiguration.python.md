# `dataAwsImagebuilderInfrastructureConfiguration` Submodule <a name="`dataAwsImagebuilderInfrastructureConfiguration` Submodule" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsImagebuilderInfrastructureConfiguration <a name="DataAwsImagebuilderInfrastructureConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration aws_imagebuilder_infrastructure_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_infrastructure_configuration

dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration(
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
  resource_tags: typing.Mapping[str] = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#arn DataAwsImagebuilderInfrastructureConfiguration#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#id DataAwsImagebuilderInfrastructureConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.resourceTags">resource_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#resource_tags DataAwsImagebuilderInfrastructureConfiguration#resource_tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#tags DataAwsImagebuilderInfrastructureConfiguration#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#arn DataAwsImagebuilderInfrastructureConfiguration#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#id DataAwsImagebuilderInfrastructureConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.resourceTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#resource_tags DataAwsImagebuilderInfrastructureConfiguration#resource_tags}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#tags DataAwsImagebuilderInfrastructureConfiguration#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetResourceTags">reset_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_tags` <a name="reset_resource_tags" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetResourceTags"></a>

```python
def reset_resource_tags() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_infrastructure_configuration

dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_infrastructure_configuration

dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_infrastructure_configuration

dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.dateCreated">date_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.dateUpdated">date_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.instanceMetadataOptions">instance_metadata_options</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList">DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.instanceProfileName">instance_profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.instanceTypes">instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.keyPair">key_pair</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList">DataAwsImagebuilderInfrastructureConfigurationLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailure">terminate_instance_on_failure</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.resourceTagsInput">resource_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.resourceTags">resource_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `date_created`<sup>Required</sup> <a name="date_created" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.dateCreated"></a>

```python
date_created: str
```

- *Type:* str

---

##### `date_updated`<sup>Required</sup> <a name="date_updated" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.dateUpdated"></a>

```python
date_updated: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `instance_metadata_options`<sup>Required</sup> <a name="instance_metadata_options" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.instanceMetadataOptions"></a>

```python
instance_metadata_options: DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList">DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList</a>

---

##### `instance_profile_name`<sup>Required</sup> <a name="instance_profile_name" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.instanceProfileName"></a>

```python
instance_profile_name: str
```

- *Type:* str

---

##### `instance_types`<sup>Required</sup> <a name="instance_types" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.instanceTypes"></a>

```python
instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_pair`<sup>Required</sup> <a name="key_pair" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.keyPair"></a>

```python
key_pair: str
```

- *Type:* str

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.logging"></a>

```python
logging: DataAwsImagebuilderInfrastructureConfigurationLoggingList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList">DataAwsImagebuilderInfrastructureConfigurationLoggingList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `terminate_instance_on_failure`<sup>Required</sup> <a name="terminate_instance_on_failure" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailure"></a>

```python
terminate_instance_on_failure: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_tags_input`<sup>Optional</sup> <a name="resource_tags_input" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.resourceTagsInput"></a>

```python
resource_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.resourceTags"></a>

```python
resource_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsImagebuilderInfrastructureConfigurationConfig <a name="DataAwsImagebuilderInfrastructureConfigurationConfig" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_infrastructure_configuration

dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str,
  id: str = None,
  resource_tags: typing.Mapping[str] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#arn DataAwsImagebuilderInfrastructureConfiguration#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#id DataAwsImagebuilderInfrastructureConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.resourceTags">resource_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#resource_tags DataAwsImagebuilderInfrastructureConfiguration#resource_tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#tags DataAwsImagebuilderInfrastructureConfiguration#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#arn DataAwsImagebuilderInfrastructureConfiguration#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#id DataAwsImagebuilderInfrastructureConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.resourceTags"></a>

```python
resource_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#resource_tags DataAwsImagebuilderInfrastructureConfiguration#resource_tags}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration#tags DataAwsImagebuilderInfrastructureConfiguration#tags}.

---

### DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions <a name="DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_infrastructure_configuration

dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions()
```


### DataAwsImagebuilderInfrastructureConfigurationLogging <a name="DataAwsImagebuilderInfrastructureConfigurationLogging" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLogging.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_infrastructure_configuration

dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLogging()
```


### DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs <a name="DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_infrastructure_configuration

dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList <a name="DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_infrastructure_configuration

dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference <a name="DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_infrastructure_configuration

dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokens">http_tokens</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions">DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_put_response_hop_limit`<sup>Required</sup> <a name="http_put_response_hop_limit" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens`<sup>Required</sup> <a name="http_tokens" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions">DataAwsImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a>

---


### DataAwsImagebuilderInfrastructureConfigurationLoggingList <a name="DataAwsImagebuilderInfrastructureConfigurationLoggingList" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_infrastructure_configuration

dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference <a name="DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_infrastructure_configuration

dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3Logs">s3_logs</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList">DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLogging">DataAwsImagebuilderInfrastructureConfigurationLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_logs`<sup>Required</sup> <a name="s3_logs" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3Logs"></a>

```python
s3_logs: DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList">DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderInfrastructureConfigurationLogging
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLogging">DataAwsImagebuilderInfrastructureConfigurationLogging</a>

---


### DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList <a name="DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_infrastructure_configuration

dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference <a name="DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_infrastructure_configuration

dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs">DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `s3_key_prefix`<sup>Required</sup> <a name="s3_key_prefix" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderInfrastructureConfiguration.DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs">DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs</a>

---



