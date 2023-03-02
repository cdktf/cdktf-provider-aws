# `dataAwsSecretsmanagerRandomPassword` Submodule <a name="`dataAwsSecretsmanagerRandomPassword` Submodule" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSecretsmanagerRandomPassword <a name="DataAwsSecretsmanagerRandomPassword" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password aws_secretsmanager_random_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_secretsmanager_random_password

dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  exclude_characters: str = None,
  exclude_lowercase: typing.Union[bool, IResolvable] = None,
  exclude_numbers: typing.Union[bool, IResolvable] = None,
  exclude_punctuation: typing.Union[bool, IResolvable] = None,
  exclude_uppercase: typing.Union[bool, IResolvable] = None,
  id: str = None,
  include_space: typing.Union[bool, IResolvable] = None,
  password_length: typing.Union[int, float] = None,
  random_password: str = None,
  require_each_included_type: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.excludeCharacters">exclude_characters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_characters DataAwsSecretsmanagerRandomPassword#exclude_characters}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.excludeLowercase">exclude_lowercase</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_lowercase DataAwsSecretsmanagerRandomPassword#exclude_lowercase}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.excludeNumbers">exclude_numbers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_numbers DataAwsSecretsmanagerRandomPassword#exclude_numbers}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.excludePunctuation">exclude_punctuation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_punctuation DataAwsSecretsmanagerRandomPassword#exclude_punctuation}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.excludeUppercase">exclude_uppercase</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_uppercase DataAwsSecretsmanagerRandomPassword#exclude_uppercase}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#id DataAwsSecretsmanagerRandomPassword#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.includeSpace">include_space</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#include_space DataAwsSecretsmanagerRandomPassword#include_space}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.passwordLength">password_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#password_length DataAwsSecretsmanagerRandomPassword#password_length}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.randomPassword">random_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#random_password DataAwsSecretsmanagerRandomPassword#random_password}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.requireEachIncludedType">require_each_included_type</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#require_each_included_type DataAwsSecretsmanagerRandomPassword#require_each_included_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `exclude_characters`<sup>Optional</sup> <a name="exclude_characters" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.excludeCharacters"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_characters DataAwsSecretsmanagerRandomPassword#exclude_characters}.

---

##### `exclude_lowercase`<sup>Optional</sup> <a name="exclude_lowercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.excludeLowercase"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_lowercase DataAwsSecretsmanagerRandomPassword#exclude_lowercase}.

---

##### `exclude_numbers`<sup>Optional</sup> <a name="exclude_numbers" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.excludeNumbers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_numbers DataAwsSecretsmanagerRandomPassword#exclude_numbers}.

---

##### `exclude_punctuation`<sup>Optional</sup> <a name="exclude_punctuation" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.excludePunctuation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_punctuation DataAwsSecretsmanagerRandomPassword#exclude_punctuation}.

---

##### `exclude_uppercase`<sup>Optional</sup> <a name="exclude_uppercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.excludeUppercase"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_uppercase DataAwsSecretsmanagerRandomPassword#exclude_uppercase}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#id DataAwsSecretsmanagerRandomPassword#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_space`<sup>Optional</sup> <a name="include_space" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.includeSpace"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#include_space DataAwsSecretsmanagerRandomPassword#include_space}.

---

##### `password_length`<sup>Optional</sup> <a name="password_length" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.passwordLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#password_length DataAwsSecretsmanagerRandomPassword#password_length}.

---

##### `random_password`<sup>Optional</sup> <a name="random_password" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.randomPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#random_password DataAwsSecretsmanagerRandomPassword#random_password}.

---

##### `require_each_included_type`<sup>Optional</sup> <a name="require_each_included_type" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.Initializer.parameter.requireEachIncludedType"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#require_each_included_type DataAwsSecretsmanagerRandomPassword#require_each_included_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeCharacters">reset_exclude_characters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeLowercase">reset_exclude_lowercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeNumbers">reset_exclude_numbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludePunctuation">reset_exclude_punctuation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeUppercase">reset_exclude_uppercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetIncludeSpace">reset_include_space</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetPasswordLength">reset_password_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetRandomPassword">reset_random_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetRequireEachIncludedType">reset_require_each_included_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_exclude_characters` <a name="reset_exclude_characters" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeCharacters"></a>

```python
def reset_exclude_characters() -> None
```

##### `reset_exclude_lowercase` <a name="reset_exclude_lowercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeLowercase"></a>

```python
def reset_exclude_lowercase() -> None
```

##### `reset_exclude_numbers` <a name="reset_exclude_numbers" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeNumbers"></a>

```python
def reset_exclude_numbers() -> None
```

##### `reset_exclude_punctuation` <a name="reset_exclude_punctuation" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludePunctuation"></a>

```python
def reset_exclude_punctuation() -> None
```

##### `reset_exclude_uppercase` <a name="reset_exclude_uppercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetExcludeUppercase"></a>

```python
def reset_exclude_uppercase() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_space` <a name="reset_include_space" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetIncludeSpace"></a>

```python
def reset_include_space() -> None
```

##### `reset_password_length` <a name="reset_password_length" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetPasswordLength"></a>

```python
def reset_password_length() -> None
```

##### `reset_random_password` <a name="reset_random_password" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetRandomPassword"></a>

```python
def reset_random_password() -> None
```

##### `reset_require_each_included_type` <a name="reset_require_each_included_type" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.resetRequireEachIncludedType"></a>

```python
def reset_require_each_included_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_secretsmanager_random_password

dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_secretsmanager_random_password

dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_secretsmanager_random_password

dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeCharactersInput">exclude_characters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeLowercaseInput">exclude_lowercase_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeNumbersInput">exclude_numbers_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludePunctuationInput">exclude_punctuation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeUppercaseInput">exclude_uppercase_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.includeSpaceInput">include_space_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.passwordLengthInput">password_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.randomPasswordInput">random_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.requireEachIncludedTypeInput">require_each_included_type_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeCharacters">exclude_characters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeLowercase">exclude_lowercase</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeNumbers">exclude_numbers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludePunctuation">exclude_punctuation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeUppercase">exclude_uppercase</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.includeSpace">include_space</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.passwordLength">password_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.randomPassword">random_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.requireEachIncludedType">require_each_included_type</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `exclude_characters_input`<sup>Optional</sup> <a name="exclude_characters_input" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeCharactersInput"></a>

```python
exclude_characters_input: str
```

- *Type:* str

---

##### `exclude_lowercase_input`<sup>Optional</sup> <a name="exclude_lowercase_input" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeLowercaseInput"></a>

```python
exclude_lowercase_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclude_numbers_input`<sup>Optional</sup> <a name="exclude_numbers_input" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeNumbersInput"></a>

```python
exclude_numbers_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclude_punctuation_input`<sup>Optional</sup> <a name="exclude_punctuation_input" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludePunctuationInput"></a>

```python
exclude_punctuation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclude_uppercase_input`<sup>Optional</sup> <a name="exclude_uppercase_input" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeUppercaseInput"></a>

```python
exclude_uppercase_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_space_input`<sup>Optional</sup> <a name="include_space_input" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.includeSpaceInput"></a>

```python
include_space_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_length_input`<sup>Optional</sup> <a name="password_length_input" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.passwordLengthInput"></a>

```python
password_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `random_password_input`<sup>Optional</sup> <a name="random_password_input" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.randomPasswordInput"></a>

```python
random_password_input: str
```

- *Type:* str

---

##### `require_each_included_type_input`<sup>Optional</sup> <a name="require_each_included_type_input" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.requireEachIncludedTypeInput"></a>

```python
require_each_included_type_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclude_characters`<sup>Required</sup> <a name="exclude_characters" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeCharacters"></a>

```python
exclude_characters: str
```

- *Type:* str

---

##### `exclude_lowercase`<sup>Required</sup> <a name="exclude_lowercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeLowercase"></a>

```python
exclude_lowercase: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclude_numbers`<sup>Required</sup> <a name="exclude_numbers" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeNumbers"></a>

```python
exclude_numbers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclude_punctuation`<sup>Required</sup> <a name="exclude_punctuation" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludePunctuation"></a>

```python
exclude_punctuation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclude_uppercase`<sup>Required</sup> <a name="exclude_uppercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.excludeUppercase"></a>

```python
exclude_uppercase: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_space`<sup>Required</sup> <a name="include_space" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.includeSpace"></a>

```python
include_space: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_length`<sup>Required</sup> <a name="password_length" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.passwordLength"></a>

```python
password_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `random_password`<sup>Required</sup> <a name="random_password" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.randomPassword"></a>

```python
random_password: str
```

- *Type:* str

---

##### `require_each_included_type`<sup>Required</sup> <a name="require_each_included_type" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.requireEachIncludedType"></a>

```python
require_each_included_type: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPassword.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSecretsmanagerRandomPasswordConfig <a name="DataAwsSecretsmanagerRandomPasswordConfig" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_secretsmanager_random_password

dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  exclude_characters: str = None,
  exclude_lowercase: typing.Union[bool, IResolvable] = None,
  exclude_numbers: typing.Union[bool, IResolvable] = None,
  exclude_punctuation: typing.Union[bool, IResolvable] = None,
  exclude_uppercase: typing.Union[bool, IResolvable] = None,
  id: str = None,
  include_space: typing.Union[bool, IResolvable] = None,
  password_length: typing.Union[int, float] = None,
  random_password: str = None,
  require_each_included_type: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeCharacters">exclude_characters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_characters DataAwsSecretsmanagerRandomPassword#exclude_characters}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeLowercase">exclude_lowercase</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_lowercase DataAwsSecretsmanagerRandomPassword#exclude_lowercase}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeNumbers">exclude_numbers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_numbers DataAwsSecretsmanagerRandomPassword#exclude_numbers}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludePunctuation">exclude_punctuation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_punctuation DataAwsSecretsmanagerRandomPassword#exclude_punctuation}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeUppercase">exclude_uppercase</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_uppercase DataAwsSecretsmanagerRandomPassword#exclude_uppercase}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#id DataAwsSecretsmanagerRandomPassword#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.includeSpace">include_space</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#include_space DataAwsSecretsmanagerRandomPassword#include_space}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.passwordLength">password_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#password_length DataAwsSecretsmanagerRandomPassword#password_length}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.randomPassword">random_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#random_password DataAwsSecretsmanagerRandomPassword#random_password}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.requireEachIncludedType">require_each_included_type</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#require_each_included_type DataAwsSecretsmanagerRandomPassword#require_each_included_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `exclude_characters`<sup>Optional</sup> <a name="exclude_characters" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeCharacters"></a>

```python
exclude_characters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_characters DataAwsSecretsmanagerRandomPassword#exclude_characters}.

---

##### `exclude_lowercase`<sup>Optional</sup> <a name="exclude_lowercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeLowercase"></a>

```python
exclude_lowercase: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_lowercase DataAwsSecretsmanagerRandomPassword#exclude_lowercase}.

---

##### `exclude_numbers`<sup>Optional</sup> <a name="exclude_numbers" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeNumbers"></a>

```python
exclude_numbers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_numbers DataAwsSecretsmanagerRandomPassword#exclude_numbers}.

---

##### `exclude_punctuation`<sup>Optional</sup> <a name="exclude_punctuation" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludePunctuation"></a>

```python
exclude_punctuation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_punctuation DataAwsSecretsmanagerRandomPassword#exclude_punctuation}.

---

##### `exclude_uppercase`<sup>Optional</sup> <a name="exclude_uppercase" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.excludeUppercase"></a>

```python
exclude_uppercase: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_uppercase DataAwsSecretsmanagerRandomPassword#exclude_uppercase}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#id DataAwsSecretsmanagerRandomPassword#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_space`<sup>Optional</sup> <a name="include_space" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.includeSpace"></a>

```python
include_space: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#include_space DataAwsSecretsmanagerRandomPassword#include_space}.

---

##### `password_length`<sup>Optional</sup> <a name="password_length" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.passwordLength"></a>

```python
password_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#password_length DataAwsSecretsmanagerRandomPassword#password_length}.

---

##### `random_password`<sup>Optional</sup> <a name="random_password" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.randomPassword"></a>

```python
random_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#random_password DataAwsSecretsmanagerRandomPassword#random_password}.

---

##### `require_each_included_type`<sup>Optional</sup> <a name="require_each_included_type" id="@cdktf/provider-aws.dataAwsSecretsmanagerRandomPassword.DataAwsSecretsmanagerRandomPasswordConfig.property.requireEachIncludedType"></a>

```python
require_each_included_type: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#require_each_included_type DataAwsSecretsmanagerRandomPassword#require_each_included_type}.

---



