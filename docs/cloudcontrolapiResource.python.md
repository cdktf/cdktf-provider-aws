# `cloudcontrolapiResource` Submodule <a name="`cloudcontrolapiResource` Submodule" id="@cdktf/provider-aws.cloudcontrolapiResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudcontrolapiResource <a name="CloudcontrolapiResource" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource aws_cloudcontrolapi_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudcontrolapi_resource

cloudcontrolapiResource.CloudcontrolapiResource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  desired_state: str,
  type_name: str,
  id: str = None,
  role_arn: str = None,
  schema: str = None,
  timeouts: CloudcontrolapiResourceTimeouts = None,
  type_version_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.desiredState">desired_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#desired_state CloudcontrolapiResource#desired_state}. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#type_name CloudcontrolapiResource#type_name}. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#id CloudcontrolapiResource#id}. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#role_arn CloudcontrolapiResource#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.schema">schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#schema CloudcontrolapiResource#schema}. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts">CloudcontrolapiResourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.typeVersionId">type_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#type_version_id CloudcontrolapiResource#type_version_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.desiredState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#desired_state CloudcontrolapiResource#desired_state}.

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.typeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#type_name CloudcontrolapiResource#type_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#id CloudcontrolapiResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#role_arn CloudcontrolapiResource#role_arn}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.schema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#schema CloudcontrolapiResource#schema}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts">CloudcontrolapiResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#timeouts CloudcontrolapiResource#timeouts}

---

##### `type_version_id`<sup>Optional</sup> <a name="type_version_id" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.Initializer.parameter.typeVersionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#type_version_id CloudcontrolapiResource#type_version_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetTypeVersionId">reset_type_version_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#create CloudcontrolapiResource#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#delete CloudcontrolapiResource#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#update CloudcontrolapiResource#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type_version_id` <a name="reset_type_version_id" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.resetTypeVersionId"></a>

```python
def reset_type_version_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudcontrolapi_resource

cloudcontrolapiResource.CloudcontrolapiResource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudcontrolapi_resource

cloudcontrolapiResource.CloudcontrolapiResource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudcontrolapi_resource

cloudcontrolapiResource.CloudcontrolapiResource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.properties">properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference">CloudcontrolapiResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.desiredStateInput">desired_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts">CloudcontrolapiResourceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.typeVersionIdInput">type_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.typeVersionId">type_version_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.properties"></a>

```python
properties: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.timeouts"></a>

```python
timeouts: CloudcontrolapiResourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference">CloudcontrolapiResourceTimeoutsOutputReference</a>

---

##### `desired_state_input`<sup>Optional</sup> <a name="desired_state_input" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.desiredStateInput"></a>

```python
desired_state_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[CloudcontrolapiResourceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts">CloudcontrolapiResourceTimeouts</a>, cdktf.IResolvable]

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `type_version_id_input`<sup>Optional</sup> <a name="type_version_id_input" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.typeVersionIdInput"></a>

```python
type_version_id_input: str
```

- *Type:* str

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `type_version_id`<sup>Required</sup> <a name="type_version_id" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.typeVersionId"></a>

```python
type_version_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudcontrolapiResourceConfig <a name="CloudcontrolapiResourceConfig" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudcontrolapi_resource

cloudcontrolapiResource.CloudcontrolapiResourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  desired_state: str,
  type_name: str,
  id: str = None,
  role_arn: str = None,
  schema: str = None,
  timeouts: CloudcontrolapiResourceTimeouts = None,
  type_version_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.desiredState">desired_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#desired_state CloudcontrolapiResource#desired_state}. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#type_name CloudcontrolapiResource#type_name}. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#id CloudcontrolapiResource#id}. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#role_arn CloudcontrolapiResource#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.schema">schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#schema CloudcontrolapiResource#schema}. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts">CloudcontrolapiResourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.typeVersionId">type_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#type_version_id CloudcontrolapiResource#type_version_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#desired_state CloudcontrolapiResource#desired_state}.

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#type_name CloudcontrolapiResource#type_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#id CloudcontrolapiResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#role_arn CloudcontrolapiResource#role_arn}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#schema CloudcontrolapiResource#schema}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.timeouts"></a>

```python
timeouts: CloudcontrolapiResourceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts">CloudcontrolapiResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#timeouts CloudcontrolapiResource#timeouts}

---

##### `type_version_id`<sup>Optional</sup> <a name="type_version_id" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceConfig.property.typeVersionId"></a>

```python
type_version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#type_version_id CloudcontrolapiResource#type_version_id}.

---

### CloudcontrolapiResourceTimeouts <a name="CloudcontrolapiResourceTimeouts" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudcontrolapi_resource

cloudcontrolapiResource.CloudcontrolapiResourceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#create CloudcontrolapiResource#create}. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#delete CloudcontrolapiResource#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#update CloudcontrolapiResource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#create CloudcontrolapiResource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#delete CloudcontrolapiResource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource#update CloudcontrolapiResource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudcontrolapiResourceTimeoutsOutputReference <a name="CloudcontrolapiResourceTimeoutsOutputReference" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudcontrolapi_resource

cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts">CloudcontrolapiResourceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudcontrolapiResourceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudcontrolapiResource.CloudcontrolapiResourceTimeouts">CloudcontrolapiResourceTimeouts</a>, cdktf.IResolvable]

---



