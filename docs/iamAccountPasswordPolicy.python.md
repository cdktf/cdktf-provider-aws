# `iamAccountPasswordPolicy` Submodule <a name="`iamAccountPasswordPolicy` Submodule" id="@cdktf/provider-aws.iamAccountPasswordPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamAccountPasswordPolicy <a name="IamAccountPasswordPolicy" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy aws_iam_account_password_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iam_account_password_policy

iamAccountPasswordPolicy.IamAccountPasswordPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allow_users_to_change_password: typing.Union[bool, IResolvable] = None,
  hard_expiry: typing.Union[bool, IResolvable] = None,
  id: str = None,
  max_password_age: typing.Union[int, float] = None,
  minimum_password_length: typing.Union[int, float] = None,
  password_reuse_prevention: typing.Union[int, float] = None,
  require_lowercase_characters: typing.Union[bool, IResolvable] = None,
  require_numbers: typing.Union[bool, IResolvable] = None,
  require_symbols: typing.Union[bool, IResolvable] = None,
  require_uppercase_characters: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.allowUsersToChangePassword">allow_users_to_change_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#allow_users_to_change_password IamAccountPasswordPolicy#allow_users_to_change_password}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.hardExpiry">hard_expiry</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#hard_expiry IamAccountPasswordPolicy#hard_expiry}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#id IamAccountPasswordPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.maxPasswordAge">max_password_age</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#max_password_age IamAccountPasswordPolicy#max_password_age}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.minimumPasswordLength">minimum_password_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#minimum_password_length IamAccountPasswordPolicy#minimum_password_length}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.passwordReusePrevention">password_reuse_prevention</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#password_reuse_prevention IamAccountPasswordPolicy#password_reuse_prevention}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.requireLowercaseCharacters">require_lowercase_characters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_lowercase_characters IamAccountPasswordPolicy#require_lowercase_characters}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.requireNumbers">require_numbers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_numbers IamAccountPasswordPolicy#require_numbers}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.requireSymbols">require_symbols</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_symbols IamAccountPasswordPolicy#require_symbols}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.requireUppercaseCharacters">require_uppercase_characters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_uppercase_characters IamAccountPasswordPolicy#require_uppercase_characters}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allow_users_to_change_password`<sup>Optional</sup> <a name="allow_users_to_change_password" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.allowUsersToChangePassword"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#allow_users_to_change_password IamAccountPasswordPolicy#allow_users_to_change_password}.

---

##### `hard_expiry`<sup>Optional</sup> <a name="hard_expiry" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.hardExpiry"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#hard_expiry IamAccountPasswordPolicy#hard_expiry}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#id IamAccountPasswordPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_password_age`<sup>Optional</sup> <a name="max_password_age" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.maxPasswordAge"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#max_password_age IamAccountPasswordPolicy#max_password_age}.

---

##### `minimum_password_length`<sup>Optional</sup> <a name="minimum_password_length" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.minimumPasswordLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#minimum_password_length IamAccountPasswordPolicy#minimum_password_length}.

---

##### `password_reuse_prevention`<sup>Optional</sup> <a name="password_reuse_prevention" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.passwordReusePrevention"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#password_reuse_prevention IamAccountPasswordPolicy#password_reuse_prevention}.

---

##### `require_lowercase_characters`<sup>Optional</sup> <a name="require_lowercase_characters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.requireLowercaseCharacters"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_lowercase_characters IamAccountPasswordPolicy#require_lowercase_characters}.

---

##### `require_numbers`<sup>Optional</sup> <a name="require_numbers" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.requireNumbers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_numbers IamAccountPasswordPolicy#require_numbers}.

---

##### `require_symbols`<sup>Optional</sup> <a name="require_symbols" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.requireSymbols"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_symbols IamAccountPasswordPolicy#require_symbols}.

---

##### `require_uppercase_characters`<sup>Optional</sup> <a name="require_uppercase_characters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.Initializer.parameter.requireUppercaseCharacters"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_uppercase_characters IamAccountPasswordPolicy#require_uppercase_characters}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetAllowUsersToChangePassword">reset_allow_users_to_change_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetHardExpiry">reset_hard_expiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetMaxPasswordAge">reset_max_password_age</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetMinimumPasswordLength">reset_minimum_password_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetPasswordReusePrevention">reset_password_reuse_prevention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireLowercaseCharacters">reset_require_lowercase_characters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireNumbers">reset_require_numbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireSymbols">reset_require_symbols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireUppercaseCharacters">reset_require_uppercase_characters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_allow_users_to_change_password` <a name="reset_allow_users_to_change_password" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetAllowUsersToChangePassword"></a>

```python
def reset_allow_users_to_change_password() -> None
```

##### `reset_hard_expiry` <a name="reset_hard_expiry" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetHardExpiry"></a>

```python
def reset_hard_expiry() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_password_age` <a name="reset_max_password_age" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetMaxPasswordAge"></a>

```python
def reset_max_password_age() -> None
```

##### `reset_minimum_password_length` <a name="reset_minimum_password_length" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetMinimumPasswordLength"></a>

```python
def reset_minimum_password_length() -> None
```

##### `reset_password_reuse_prevention` <a name="reset_password_reuse_prevention" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetPasswordReusePrevention"></a>

```python
def reset_password_reuse_prevention() -> None
```

##### `reset_require_lowercase_characters` <a name="reset_require_lowercase_characters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireLowercaseCharacters"></a>

```python
def reset_require_lowercase_characters() -> None
```

##### `reset_require_numbers` <a name="reset_require_numbers" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireNumbers"></a>

```python
def reset_require_numbers() -> None
```

##### `reset_require_symbols` <a name="reset_require_symbols" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireSymbols"></a>

```python
def reset_require_symbols() -> None
```

##### `reset_require_uppercase_characters` <a name="reset_require_uppercase_characters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.resetRequireUppercaseCharacters"></a>

```python
def reset_require_uppercase_characters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import iam_account_password_policy

iamAccountPasswordPolicy.IamAccountPasswordPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import iam_account_password_policy

iamAccountPasswordPolicy.IamAccountPasswordPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import iam_account_password_policy

iamAccountPasswordPolicy.IamAccountPasswordPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.expirePasswords">expire_passwords</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.allowUsersToChangePasswordInput">allow_users_to_change_password_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.hardExpiryInput">hard_expiry_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.maxPasswordAgeInput">max_password_age_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.minimumPasswordLengthInput">minimum_password_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.passwordReusePreventionInput">password_reuse_prevention_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireLowercaseCharactersInput">require_lowercase_characters_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireNumbersInput">require_numbers_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireSymbolsInput">require_symbols_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireUppercaseCharactersInput">require_uppercase_characters_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.allowUsersToChangePassword">allow_users_to_change_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.hardExpiry">hard_expiry</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.maxPasswordAge">max_password_age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.minimumPasswordLength">minimum_password_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.passwordReusePrevention">password_reuse_prevention</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireLowercaseCharacters">require_lowercase_characters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireNumbers">require_numbers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireSymbols">require_symbols</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireUppercaseCharacters">require_uppercase_characters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `expire_passwords`<sup>Required</sup> <a name="expire_passwords" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.expirePasswords"></a>

```python
expire_passwords: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `allow_users_to_change_password_input`<sup>Optional</sup> <a name="allow_users_to_change_password_input" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.allowUsersToChangePasswordInput"></a>

```python
allow_users_to_change_password_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hard_expiry_input`<sup>Optional</sup> <a name="hard_expiry_input" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.hardExpiryInput"></a>

```python
hard_expiry_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_password_age_input`<sup>Optional</sup> <a name="max_password_age_input" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.maxPasswordAgeInput"></a>

```python
max_password_age_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_password_length_input`<sup>Optional</sup> <a name="minimum_password_length_input" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.minimumPasswordLengthInput"></a>

```python
minimum_password_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_reuse_prevention_input`<sup>Optional</sup> <a name="password_reuse_prevention_input" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.passwordReusePreventionInput"></a>

```python
password_reuse_prevention_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `require_lowercase_characters_input`<sup>Optional</sup> <a name="require_lowercase_characters_input" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireLowercaseCharactersInput"></a>

```python
require_lowercase_characters_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_numbers_input`<sup>Optional</sup> <a name="require_numbers_input" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireNumbersInput"></a>

```python
require_numbers_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_symbols_input`<sup>Optional</sup> <a name="require_symbols_input" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireSymbolsInput"></a>

```python
require_symbols_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_uppercase_characters_input`<sup>Optional</sup> <a name="require_uppercase_characters_input" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireUppercaseCharactersInput"></a>

```python
require_uppercase_characters_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_users_to_change_password`<sup>Required</sup> <a name="allow_users_to_change_password" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.allowUsersToChangePassword"></a>

```python
allow_users_to_change_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hard_expiry`<sup>Required</sup> <a name="hard_expiry" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.hardExpiry"></a>

```python
hard_expiry: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_password_age`<sup>Required</sup> <a name="max_password_age" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.maxPasswordAge"></a>

```python
max_password_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_password_length`<sup>Required</sup> <a name="minimum_password_length" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.minimumPasswordLength"></a>

```python
minimum_password_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_reuse_prevention`<sup>Required</sup> <a name="password_reuse_prevention" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.passwordReusePrevention"></a>

```python
password_reuse_prevention: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `require_lowercase_characters`<sup>Required</sup> <a name="require_lowercase_characters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireLowercaseCharacters"></a>

```python
require_lowercase_characters: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_numbers`<sup>Required</sup> <a name="require_numbers" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireNumbers"></a>

```python
require_numbers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_symbols`<sup>Required</sup> <a name="require_symbols" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireSymbols"></a>

```python
require_symbols: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_uppercase_characters`<sup>Required</sup> <a name="require_uppercase_characters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.requireUppercaseCharacters"></a>

```python
require_uppercase_characters: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamAccountPasswordPolicyConfig <a name="IamAccountPasswordPolicyConfig" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iam_account_password_policy

iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allow_users_to_change_password: typing.Union[bool, IResolvable] = None,
  hard_expiry: typing.Union[bool, IResolvable] = None,
  id: str = None,
  max_password_age: typing.Union[int, float] = None,
  minimum_password_length: typing.Union[int, float] = None,
  password_reuse_prevention: typing.Union[int, float] = None,
  require_lowercase_characters: typing.Union[bool, IResolvable] = None,
  require_numbers: typing.Union[bool, IResolvable] = None,
  require_symbols: typing.Union[bool, IResolvable] = None,
  require_uppercase_characters: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.allowUsersToChangePassword">allow_users_to_change_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#allow_users_to_change_password IamAccountPasswordPolicy#allow_users_to_change_password}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.hardExpiry">hard_expiry</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#hard_expiry IamAccountPasswordPolicy#hard_expiry}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#id IamAccountPasswordPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.maxPasswordAge">max_password_age</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#max_password_age IamAccountPasswordPolicy#max_password_age}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.minimumPasswordLength">minimum_password_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#minimum_password_length IamAccountPasswordPolicy#minimum_password_length}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.passwordReusePrevention">password_reuse_prevention</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#password_reuse_prevention IamAccountPasswordPolicy#password_reuse_prevention}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireLowercaseCharacters">require_lowercase_characters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_lowercase_characters IamAccountPasswordPolicy#require_lowercase_characters}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireNumbers">require_numbers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_numbers IamAccountPasswordPolicy#require_numbers}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireSymbols">require_symbols</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_symbols IamAccountPasswordPolicy#require_symbols}. |
| <code><a href="#@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireUppercaseCharacters">require_uppercase_characters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_uppercase_characters IamAccountPasswordPolicy#require_uppercase_characters}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allow_users_to_change_password`<sup>Optional</sup> <a name="allow_users_to_change_password" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.allowUsersToChangePassword"></a>

```python
allow_users_to_change_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#allow_users_to_change_password IamAccountPasswordPolicy#allow_users_to_change_password}.

---

##### `hard_expiry`<sup>Optional</sup> <a name="hard_expiry" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.hardExpiry"></a>

```python
hard_expiry: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#hard_expiry IamAccountPasswordPolicy#hard_expiry}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#id IamAccountPasswordPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_password_age`<sup>Optional</sup> <a name="max_password_age" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.maxPasswordAge"></a>

```python
max_password_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#max_password_age IamAccountPasswordPolicy#max_password_age}.

---

##### `minimum_password_length`<sup>Optional</sup> <a name="minimum_password_length" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.minimumPasswordLength"></a>

```python
minimum_password_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#minimum_password_length IamAccountPasswordPolicy#minimum_password_length}.

---

##### `password_reuse_prevention`<sup>Optional</sup> <a name="password_reuse_prevention" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.passwordReusePrevention"></a>

```python
password_reuse_prevention: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#password_reuse_prevention IamAccountPasswordPolicy#password_reuse_prevention}.

---

##### `require_lowercase_characters`<sup>Optional</sup> <a name="require_lowercase_characters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireLowercaseCharacters"></a>

```python
require_lowercase_characters: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_lowercase_characters IamAccountPasswordPolicy#require_lowercase_characters}.

---

##### `require_numbers`<sup>Optional</sup> <a name="require_numbers" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireNumbers"></a>

```python
require_numbers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_numbers IamAccountPasswordPolicy#require_numbers}.

---

##### `require_symbols`<sup>Optional</sup> <a name="require_symbols" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireSymbols"></a>

```python
require_symbols: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_symbols IamAccountPasswordPolicy#require_symbols}.

---

##### `require_uppercase_characters`<sup>Optional</sup> <a name="require_uppercase_characters" id="@cdktf/provider-aws.iamAccountPasswordPolicy.IamAccountPasswordPolicyConfig.property.requireUppercaseCharacters"></a>

```python
require_uppercase_characters: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy#require_uppercase_characters IamAccountPasswordPolicy#require_uppercase_characters}.

---



