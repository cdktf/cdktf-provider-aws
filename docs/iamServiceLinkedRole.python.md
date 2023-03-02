# `iamServiceLinkedRole` Submodule <a name="`iamServiceLinkedRole` Submodule" id="@cdktf/provider-aws.iamServiceLinkedRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamServiceLinkedRole <a name="IamServiceLinkedRole" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role aws_iam_service_linked_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iam_service_linked_role

iamServiceLinkedRole.IamServiceLinkedRole(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_service_name: str,
  custom_suffix: str = None,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.awsServiceName">aws_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#aws_service_name IamServiceLinkedRole#aws_service_name}. |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.customSuffix">custom_suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#custom_suffix IamServiceLinkedRole#custom_suffix}. |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#description IamServiceLinkedRole#description}. |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#id IamServiceLinkedRole#id}. |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#tags IamServiceLinkedRole#tags}. |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#tags_all IamServiceLinkedRole#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_service_name`<sup>Required</sup> <a name="aws_service_name" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.awsServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#aws_service_name IamServiceLinkedRole#aws_service_name}.

---

##### `custom_suffix`<sup>Optional</sup> <a name="custom_suffix" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.customSuffix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#custom_suffix IamServiceLinkedRole#custom_suffix}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#description IamServiceLinkedRole#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#id IamServiceLinkedRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#tags IamServiceLinkedRole#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#tags_all IamServiceLinkedRole#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.resetCustomSuffix">reset_custom_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_custom_suffix` <a name="reset_custom_suffix" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.resetCustomSuffix"></a>

```python
def reset_custom_suffix() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import iam_service_linked_role

iamServiceLinkedRole.IamServiceLinkedRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import iam_service_linked_role

iamServiceLinkedRole.IamServiceLinkedRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import iam_service_linked_role

iamServiceLinkedRole.IamServiceLinkedRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.createDate">create_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.awsServiceNameInput">aws_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.customSuffixInput">custom_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.awsServiceName">aws_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.customSuffix">custom_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `create_date`<sup>Required</sup> <a name="create_date" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.createDate"></a>

```python
create_date: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `aws_service_name_input`<sup>Optional</sup> <a name="aws_service_name_input" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.awsServiceNameInput"></a>

```python
aws_service_name_input: str
```

- *Type:* str

---

##### `custom_suffix_input`<sup>Optional</sup> <a name="custom_suffix_input" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.customSuffixInput"></a>

```python
custom_suffix_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `aws_service_name`<sup>Required</sup> <a name="aws_service_name" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.awsServiceName"></a>

```python
aws_service_name: str
```

- *Type:* str

---

##### `custom_suffix`<sup>Required</sup> <a name="custom_suffix" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.customSuffix"></a>

```python
custom_suffix: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamServiceLinkedRoleConfig <a name="IamServiceLinkedRoleConfig" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iam_service_linked_role

iamServiceLinkedRole.IamServiceLinkedRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_service_name: str,
  custom_suffix: str = None,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.awsServiceName">aws_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#aws_service_name IamServiceLinkedRole#aws_service_name}. |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.customSuffix">custom_suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#custom_suffix IamServiceLinkedRole#custom_suffix}. |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#description IamServiceLinkedRole#description}. |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#id IamServiceLinkedRole#id}. |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#tags IamServiceLinkedRole#tags}. |
| <code><a href="#@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#tags_all IamServiceLinkedRole#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_service_name`<sup>Required</sup> <a name="aws_service_name" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.awsServiceName"></a>

```python
aws_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#aws_service_name IamServiceLinkedRole#aws_service_name}.

---

##### `custom_suffix`<sup>Optional</sup> <a name="custom_suffix" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.customSuffix"></a>

```python
custom_suffix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#custom_suffix IamServiceLinkedRole#custom_suffix}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#description IamServiceLinkedRole#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#id IamServiceLinkedRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#tags IamServiceLinkedRole#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role#tags_all IamServiceLinkedRole#tags_all}.

---



