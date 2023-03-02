# `iamUserLoginProfile` Submodule <a name="`iamUserLoginProfile` Submodule" id="@cdktf/provider-aws.iamUserLoginProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamUserLoginProfile <a name="IamUserLoginProfile" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile aws_iam_user_login_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iam_user_login_profile

iamUserLoginProfile.IamUserLoginProfile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  user: str,
  id: str = None,
  password_length: typing.Union[int, float] = None,
  password_reset_required: typing.Union[bool, IResolvable] = None,
  pgp_key: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.user">user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#user IamUserLoginProfile#user}. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#id IamUserLoginProfile#id}. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.passwordLength">password_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#password_length IamUserLoginProfile#password_length}. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.passwordResetRequired">password_reset_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#password_reset_required IamUserLoginProfile#password_reset_required}. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.pgpKey">pgp_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#pgp_key IamUserLoginProfile#pgp_key}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.user"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#user IamUserLoginProfile#user}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#id IamUserLoginProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password_length`<sup>Optional</sup> <a name="password_length" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.passwordLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#password_length IamUserLoginProfile#password_length}.

---

##### `password_reset_required`<sup>Optional</sup> <a name="password_reset_required" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.passwordResetRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#password_reset_required IamUserLoginProfile#password_reset_required}.

---

##### `pgp_key`<sup>Optional</sup> <a name="pgp_key" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.pgpKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#pgp_key IamUserLoginProfile#pgp_key}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPasswordLength">reset_password_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPasswordResetRequired">reset_password_reset_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPgpKey">reset_pgp_key</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_password_length` <a name="reset_password_length" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPasswordLength"></a>

```python
def reset_password_length() -> None
```

##### `reset_password_reset_required` <a name="reset_password_reset_required" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPasswordResetRequired"></a>

```python
def reset_password_reset_required() -> None
```

##### `reset_pgp_key` <a name="reset_pgp_key" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPgpKey"></a>

```python
def reset_pgp_key() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import iam_user_login_profile

iamUserLoginProfile.IamUserLoginProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import iam_user_login_profile

iamUserLoginProfile.IamUserLoginProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import iam_user_login_profile

iamUserLoginProfile.IamUserLoginProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.encryptedPassword">encrypted_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.keyFingerprint">key_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordLengthInput">password_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordResetRequiredInput">password_reset_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.pgpKeyInput">pgp_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordLength">password_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordResetRequired">password_reset_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.pgpKey">pgp_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.user">user</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `encrypted_password`<sup>Required</sup> <a name="encrypted_password" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.encryptedPassword"></a>

```python
encrypted_password: str
```

- *Type:* str

---

##### `key_fingerprint`<sup>Required</sup> <a name="key_fingerprint" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.keyFingerprint"></a>

```python
key_fingerprint: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `password_length_input`<sup>Optional</sup> <a name="password_length_input" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordLengthInput"></a>

```python
password_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_reset_required_input`<sup>Optional</sup> <a name="password_reset_required_input" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordResetRequiredInput"></a>

```python
password_reset_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pgp_key_input`<sup>Optional</sup> <a name="pgp_key_input" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.pgpKeyInput"></a>

```python
pgp_key_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `password_length`<sup>Required</sup> <a name="password_length" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordLength"></a>

```python
password_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_reset_required`<sup>Required</sup> <a name="password_reset_required" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordResetRequired"></a>

```python
password_reset_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pgp_key`<sup>Required</sup> <a name="pgp_key" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.pgpKey"></a>

```python
pgp_key: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.user"></a>

```python
user: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamUserLoginProfileConfig <a name="IamUserLoginProfileConfig" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iam_user_login_profile

iamUserLoginProfile.IamUserLoginProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  user: str,
  id: str = None,
  password_length: typing.Union[int, float] = None,
  password_reset_required: typing.Union[bool, IResolvable] = None,
  pgp_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.user">user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#user IamUserLoginProfile#user}. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#id IamUserLoginProfile#id}. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.passwordLength">password_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#password_length IamUserLoginProfile#password_length}. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.passwordResetRequired">password_reset_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#password_reset_required IamUserLoginProfile#password_reset_required}. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.pgpKey">pgp_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#pgp_key IamUserLoginProfile#pgp_key}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.user"></a>

```python
user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#user IamUserLoginProfile#user}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#id IamUserLoginProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password_length`<sup>Optional</sup> <a name="password_length" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.passwordLength"></a>

```python
password_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#password_length IamUserLoginProfile#password_length}.

---

##### `password_reset_required`<sup>Optional</sup> <a name="password_reset_required" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.passwordResetRequired"></a>

```python
password_reset_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#password_reset_required IamUserLoginProfile#password_reset_required}.

---

##### `pgp_key`<sup>Optional</sup> <a name="pgp_key" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.pgpKey"></a>

```python
pgp_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile#pgp_key IamUserLoginProfile#pgp_key}.

---



