# `dataAwsEcrImage` Submodule <a name="`dataAwsEcrImage` Submodule" id="@cdktf/provider-aws.dataAwsEcrImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEcrImage <a name="DataAwsEcrImage" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecr_image aws_ecr_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecr_image

dataAwsEcrImage.DataAwsEcrImage(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  repository_name: str,
  id: str = None,
  image_digest: str = None,
  image_tag: str = None,
  most_recent: typing.Union[bool, IResolvable] = None,
  registry_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.repositoryName">repository_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#repository_name DataAwsEcrImage#repository_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#id DataAwsEcrImage#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.imageDigest">image_digest</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#image_digest DataAwsEcrImage#image_digest}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.imageTag">image_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#image_tag DataAwsEcrImage#image_tag}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.mostRecent">most_recent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#most_recent DataAwsEcrImage#most_recent}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.registryId">registry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#registry_id DataAwsEcrImage#registry_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.repositoryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#repository_name DataAwsEcrImage#repository_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#id DataAwsEcrImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_digest`<sup>Optional</sup> <a name="image_digest" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.imageDigest"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#image_digest DataAwsEcrImage#image_digest}.

---

##### `image_tag`<sup>Optional</sup> <a name="image_tag" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.imageTag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#image_tag DataAwsEcrImage#image_tag}.

---

##### `most_recent`<sup>Optional</sup> <a name="most_recent" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.mostRecent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#most_recent DataAwsEcrImage#most_recent}.

---

##### `registry_id`<sup>Optional</sup> <a name="registry_id" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.Initializer.parameter.registryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#registry_id DataAwsEcrImage#registry_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.resetImageDigest">reset_image_digest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.resetImageTag">reset_image_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.resetMostRecent">reset_most_recent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.resetRegistryId">reset_registry_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_digest` <a name="reset_image_digest" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.resetImageDigest"></a>

```python
def reset_image_digest() -> None
```

##### `reset_image_tag` <a name="reset_image_tag" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.resetImageTag"></a>

```python
def reset_image_tag() -> None
```

##### `reset_most_recent` <a name="reset_most_recent" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.resetMostRecent"></a>

```python
def reset_most_recent() -> None
```

##### `reset_registry_id` <a name="reset_registry_id" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.resetRegistryId"></a>

```python
def reset_registry_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecr_image

dataAwsEcrImage.DataAwsEcrImage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecr_image

dataAwsEcrImage.DataAwsEcrImage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecr_image

dataAwsEcrImage.DataAwsEcrImage.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.imagePushedAt">image_pushed_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.imageSizeInBytes">image_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.imageTags">image_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.imageDigestInput">image_digest_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.imageTagInput">image_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.mostRecentInput">most_recent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.registryIdInput">registry_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.repositoryNameInput">repository_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.imageDigest">image_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.imageTag">image_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.mostRecent">most_recent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.registryId">registry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `image_pushed_at`<sup>Required</sup> <a name="image_pushed_at" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.imagePushedAt"></a>

```python
image_pushed_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `image_size_in_bytes`<sup>Required</sup> <a name="image_size_in_bytes" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.imageSizeInBytes"></a>

```python
image_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `image_tags`<sup>Required</sup> <a name="image_tags" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.imageTags"></a>

```python
image_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_digest_input`<sup>Optional</sup> <a name="image_digest_input" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.imageDigestInput"></a>

```python
image_digest_input: str
```

- *Type:* str

---

##### `image_tag_input`<sup>Optional</sup> <a name="image_tag_input" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.imageTagInput"></a>

```python
image_tag_input: str
```

- *Type:* str

---

##### `most_recent_input`<sup>Optional</sup> <a name="most_recent_input" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.mostRecentInput"></a>

```python
most_recent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `registry_id_input`<sup>Optional</sup> <a name="registry_id_input" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.registryIdInput"></a>

```python
registry_id_input: str
```

- *Type:* str

---

##### `repository_name_input`<sup>Optional</sup> <a name="repository_name_input" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.repositoryNameInput"></a>

```python
repository_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_digest`<sup>Required</sup> <a name="image_digest" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.imageDigest"></a>

```python
image_digest: str
```

- *Type:* str

---

##### `image_tag`<sup>Required</sup> <a name="image_tag" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.imageTag"></a>

```python
image_tag: str
```

- *Type:* str

---

##### `most_recent`<sup>Required</sup> <a name="most_recent" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.mostRecent"></a>

```python
most_recent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `registry_id`<sup>Required</sup> <a name="registry_id" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.registryId"></a>

```python
registry_id: str
```

- *Type:* str

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEcrImageConfig <a name="DataAwsEcrImageConfig" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ecr_image

dataAwsEcrImage.DataAwsEcrImageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  repository_name: str,
  id: str = None,
  image_digest: str = None,
  image_tag: str = None,
  most_recent: typing.Union[bool, IResolvable] = None,
  registry_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.repositoryName">repository_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#repository_name DataAwsEcrImage#repository_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#id DataAwsEcrImage#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.imageDigest">image_digest</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#image_digest DataAwsEcrImage#image_digest}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.imageTag">image_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#image_tag DataAwsEcrImage#image_tag}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.mostRecent">most_recent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#most_recent DataAwsEcrImage#most_recent}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.registryId">registry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#registry_id DataAwsEcrImage#registry_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#repository_name DataAwsEcrImage#repository_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#id DataAwsEcrImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_digest`<sup>Optional</sup> <a name="image_digest" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.imageDigest"></a>

```python
image_digest: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#image_digest DataAwsEcrImage#image_digest}.

---

##### `image_tag`<sup>Optional</sup> <a name="image_tag" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.imageTag"></a>

```python
image_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#image_tag DataAwsEcrImage#image_tag}.

---

##### `most_recent`<sup>Optional</sup> <a name="most_recent" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.mostRecent"></a>

```python
most_recent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#most_recent DataAwsEcrImage#most_recent}.

---

##### `registry_id`<sup>Optional</sup> <a name="registry_id" id="@cdktf/provider-aws.dataAwsEcrImage.DataAwsEcrImageConfig.property.registryId"></a>

```python
registry_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image#registry_id DataAwsEcrImage#registry_id}.

---



