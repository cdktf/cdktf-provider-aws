# `dataAwsCloudcontrolapiResource` Submodule <a name="`dataAwsCloudcontrolapiResource` Submodule" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudcontrolapiResource <a name="DataAwsCloudcontrolapiResource" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource aws_cloudcontrolapi_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudcontrolapi_resource

dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  identifier: str,
  type_name: str,
  id: str = None,
  role_arn: str = None,
  type_version_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#identifier DataAwsCloudcontrolapiResource#identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#type_name DataAwsCloudcontrolapiResource#type_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#id DataAwsCloudcontrolapiResource#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#role_arn DataAwsCloudcontrolapiResource#role_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.typeVersionId">type_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#type_version_id DataAwsCloudcontrolapiResource#type_version_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#identifier DataAwsCloudcontrolapiResource#identifier}.

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.typeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#type_name DataAwsCloudcontrolapiResource#type_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#id DataAwsCloudcontrolapiResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#role_arn DataAwsCloudcontrolapiResource#role_arn}.

---

##### `type_version_id`<sup>Optional</sup> <a name="type_version_id" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.Initializer.parameter.typeVersionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#type_version_id DataAwsCloudcontrolapiResource#type_version_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetTypeVersionId">reset_type_version_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_type_version_id` <a name="reset_type_version_id" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.resetTypeVersionId"></a>

```python
def reset_type_version_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudcontrolapi_resource

dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudcontrolapi_resource

dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudcontrolapi_resource

dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.properties">properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeVersionIdInput">type_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeVersionId">type_version_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.properties"></a>

```python
properties: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `type_version_id_input`<sup>Optional</sup> <a name="type_version_id_input" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeVersionIdInput"></a>

```python
type_version_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `type_version_id`<sup>Required</sup> <a name="type_version_id" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.typeVersionId"></a>

```python
type_version_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudcontrolapiResourceConfig <a name="DataAwsCloudcontrolapiResourceConfig" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudcontrolapi_resource

dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  identifier: str,
  type_name: str,
  id: str = None,
  role_arn: str = None,
  type_version_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#identifier DataAwsCloudcontrolapiResource#identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#type_name DataAwsCloudcontrolapiResource#type_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#id DataAwsCloudcontrolapiResource#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#role_arn DataAwsCloudcontrolapiResource#role_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.typeVersionId">type_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#type_version_id DataAwsCloudcontrolapiResource#type_version_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#identifier DataAwsCloudcontrolapiResource#identifier}.

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#type_name DataAwsCloudcontrolapiResource#type_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#id DataAwsCloudcontrolapiResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#role_arn DataAwsCloudcontrolapiResource#role_arn}.

---

##### `type_version_id`<sup>Optional</sup> <a name="type_version_id" id="@cdktf/provider-aws.dataAwsCloudcontrolapiResource.DataAwsCloudcontrolapiResourceConfig.property.typeVersionId"></a>

```python
type_version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource#type_version_id DataAwsCloudcontrolapiResource#type_version_id}.

---



