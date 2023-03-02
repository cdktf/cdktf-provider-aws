# `identitystoreUser` Submodule <a name="`identitystoreUser` Submodule" id="@cdktf/provider-aws.identitystoreUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentitystoreUser <a name="IdentitystoreUser" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user aws_identitystore_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import identitystore_user

identitystoreUser.IdentitystoreUser(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  identity_store_id: str,
  name: IdentitystoreUserName,
  user_name: str,
  addresses: IdentitystoreUserAddresses = None,
  emails: IdentitystoreUserEmails = None,
  id: str = None,
  locale: str = None,
  nickname: str = None,
  phone_numbers: IdentitystoreUserPhoneNumbers = None,
  preferred_language: str = None,
  profile_url: str = None,
  timezone: str = None,
  title: str = None,
  user_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#display_name IdentitystoreUser#display_name}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.identityStoreId">identity_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#identity_store_id IdentitystoreUser#identity_store_id}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.name">name</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | name block. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_name IdentitystoreUser#user_name}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.addresses">addresses</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a></code> | addresses block. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.emails">emails</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a></code> | emails block. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#id IdentitystoreUser#id}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.locale">locale</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#locale IdentitystoreUser#locale}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.nickname">nickname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#nickname IdentitystoreUser#nickname}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.phoneNumbers">phone_numbers</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a></code> | phone_numbers block. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.preferredLanguage">preferred_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#preferred_language IdentitystoreUser#preferred_language}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.profileUrl">profile_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#profile_url IdentitystoreUser#profile_url}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#timezone IdentitystoreUser#timezone}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#title IdentitystoreUser#title}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.userType">user_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_type IdentitystoreUser#user_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#display_name IdentitystoreUser#display_name}.

---

##### `identity_store_id`<sup>Required</sup> <a name="identity_store_id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.identityStoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#identity_store_id IdentitystoreUser#identity_store_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.name"></a>

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

name block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#name IdentitystoreUser#name}

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_name IdentitystoreUser#user_name}.

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.addresses"></a>

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>

addresses block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#addresses IdentitystoreUser#addresses}

---

##### `emails`<sup>Optional</sup> <a name="emails" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.emails"></a>

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>

emails block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#emails IdentitystoreUser#emails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#id IdentitystoreUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.locale"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#locale IdentitystoreUser#locale}.

---

##### `nickname`<sup>Optional</sup> <a name="nickname" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.nickname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#nickname IdentitystoreUser#nickname}.

---

##### `phone_numbers`<sup>Optional</sup> <a name="phone_numbers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.phoneNumbers"></a>

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>

phone_numbers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#phone_numbers IdentitystoreUser#phone_numbers}

---

##### `preferred_language`<sup>Optional</sup> <a name="preferred_language" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.preferredLanguage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#preferred_language IdentitystoreUser#preferred_language}.

---

##### `profile_url`<sup>Optional</sup> <a name="profile_url" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.profileUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#profile_url IdentitystoreUser#profile_url}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#timezone IdentitystoreUser#timezone}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#title IdentitystoreUser#title}.

---

##### `user_type`<sup>Optional</sup> <a name="user_type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.Initializer.parameter.userType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_type IdentitystoreUser#user_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putAddresses">put_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putEmails">put_emails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putName">put_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putPhoneNumbers">put_phone_numbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetAddresses">reset_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetEmails">reset_emails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetLocale">reset_locale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetNickname">reset_nickname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetPhoneNumbers">reset_phone_numbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetPreferredLanguage">reset_preferred_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetProfileUrl">reset_profile_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetTimezone">reset_timezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetTitle">reset_title</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetUserType">reset_user_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_addresses` <a name="put_addresses" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putAddresses"></a>

```python
def put_addresses(
  country: str = None,
  formatted: str = None,
  locality: str = None,
  postal_code: str = None,
  primary: typing.Union[bool, IResolvable] = None,
  region: str = None,
  street_address: str = None,
  type: str = None
) -> None
```

###### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putAddresses.parameter.country"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#country IdentitystoreUser#country}.

---

###### `formatted`<sup>Optional</sup> <a name="formatted" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putAddresses.parameter.formatted"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#formatted IdentitystoreUser#formatted}.

---

###### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putAddresses.parameter.locality"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#locality IdentitystoreUser#locality}.

---

###### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putAddresses.parameter.postalCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#postal_code IdentitystoreUser#postal_code}.

---

###### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putAddresses.parameter.primary"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putAddresses.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#region IdentitystoreUser#region}.

---

###### `street_address`<sup>Optional</sup> <a name="street_address" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putAddresses.parameter.streetAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#street_address IdentitystoreUser#street_address}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putAddresses.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}.

---

##### `put_emails` <a name="put_emails" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putEmails"></a>

```python
def put_emails(
  primary: typing.Union[bool, IResolvable] = None,
  type: str = None,
  value: str = None
) -> None
```

###### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putEmails.parameter.primary"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putEmails.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putEmails.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#value IdentitystoreUser#value}.

---

##### `put_name` <a name="put_name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putName"></a>

```python
def put_name(
  family_name: str,
  given_name: str,
  formatted: str = None,
  honorific_prefix: str = None,
  honorific_suffix: str = None,
  middle_name: str = None
) -> None
```

###### `family_name`<sup>Required</sup> <a name="family_name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putName.parameter.familyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#family_name IdentitystoreUser#family_name}.

---

###### `given_name`<sup>Required</sup> <a name="given_name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putName.parameter.givenName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#given_name IdentitystoreUser#given_name}.

---

###### `formatted`<sup>Optional</sup> <a name="formatted" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putName.parameter.formatted"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#formatted IdentitystoreUser#formatted}.

---

###### `honorific_prefix`<sup>Optional</sup> <a name="honorific_prefix" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putName.parameter.honorificPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#honorific_prefix IdentitystoreUser#honorific_prefix}.

---

###### `honorific_suffix`<sup>Optional</sup> <a name="honorific_suffix" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putName.parameter.honorificSuffix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#honorific_suffix IdentitystoreUser#honorific_suffix}.

---

###### `middle_name`<sup>Optional</sup> <a name="middle_name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putName.parameter.middleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#middle_name IdentitystoreUser#middle_name}.

---

##### `put_phone_numbers` <a name="put_phone_numbers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putPhoneNumbers"></a>

```python
def put_phone_numbers(
  primary: typing.Union[bool, IResolvable] = None,
  type: str = None,
  value: str = None
) -> None
```

###### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putPhoneNumbers.parameter.primary"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putPhoneNumbers.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.putPhoneNumbers.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#value IdentitystoreUser#value}.

---

##### `reset_addresses` <a name="reset_addresses" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetAddresses"></a>

```python
def reset_addresses() -> None
```

##### `reset_emails` <a name="reset_emails" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetEmails"></a>

```python
def reset_emails() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_locale` <a name="reset_locale" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetLocale"></a>

```python
def reset_locale() -> None
```

##### `reset_nickname` <a name="reset_nickname" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetNickname"></a>

```python
def reset_nickname() -> None
```

##### `reset_phone_numbers` <a name="reset_phone_numbers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetPhoneNumbers"></a>

```python
def reset_phone_numbers() -> None
```

##### `reset_preferred_language` <a name="reset_preferred_language" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetPreferredLanguage"></a>

```python
def reset_preferred_language() -> None
```

##### `reset_profile_url` <a name="reset_profile_url" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetProfileUrl"></a>

```python
def reset_profile_url() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetTimezone"></a>

```python
def reset_timezone() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetTitle"></a>

```python
def reset_title() -> None
```

##### `reset_user_type` <a name="reset_user_type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.resetUserType"></a>

```python
def reset_user_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import identitystore_user

identitystoreUser.IdentitystoreUser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import identitystore_user

identitystoreUser.IdentitystoreUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import identitystore_user

identitystoreUser.IdentitystoreUser.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.addresses">addresses</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference">IdentitystoreUserAddressesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.emails">emails</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference">IdentitystoreUserEmailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.externalIds">external_ids</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList">IdentitystoreUserExternalIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.name">name</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference">IdentitystoreUserNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.phoneNumbers">phone_numbers</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference">IdentitystoreUserPhoneNumbersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.addressesInput">addresses_input</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.emailsInput">emails_input</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.identityStoreIdInput">identity_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.localeInput">locale_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.nameInput">name_input</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.nicknameInput">nickname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.phoneNumbersInput">phone_numbers_input</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.preferredLanguageInput">preferred_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.profileUrlInput">profile_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userTypeInput">user_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.identityStoreId">identity_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.nickname">nickname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.preferredLanguage">preferred_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.profileUrl">profile_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userType">user_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.addresses"></a>

```python
addresses: IdentitystoreUserAddressesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference">IdentitystoreUserAddressesOutputReference</a>

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.emails"></a>

```python
emails: IdentitystoreUserEmailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference">IdentitystoreUserEmailsOutputReference</a>

---

##### `external_ids`<sup>Required</sup> <a name="external_ids" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.externalIds"></a>

```python
external_ids: IdentitystoreUserExternalIdsList
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList">IdentitystoreUserExternalIdsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.name"></a>

```python
name: IdentitystoreUserNameOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference">IdentitystoreUserNameOutputReference</a>

---

##### `phone_numbers`<sup>Required</sup> <a name="phone_numbers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.phoneNumbers"></a>

```python
phone_numbers: IdentitystoreUserPhoneNumbersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference">IdentitystoreUserPhoneNumbersOutputReference</a>

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `addresses_input`<sup>Optional</sup> <a name="addresses_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.addressesInput"></a>

```python
addresses_input: IdentitystoreUserAddresses
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `emails_input`<sup>Optional</sup> <a name="emails_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.emailsInput"></a>

```python
emails_input: IdentitystoreUserEmails
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>

---

##### `identity_store_id_input`<sup>Optional</sup> <a name="identity_store_id_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.identityStoreIdInput"></a>

```python
identity_store_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `locale_input`<sup>Optional</sup> <a name="locale_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.localeInput"></a>

```python
locale_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.nameInput"></a>

```python
name_input: IdentitystoreUserName
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

---

##### `nickname_input`<sup>Optional</sup> <a name="nickname_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.nicknameInput"></a>

```python
nickname_input: str
```

- *Type:* str

---

##### `phone_numbers_input`<sup>Optional</sup> <a name="phone_numbers_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.phoneNumbersInput"></a>

```python
phone_numbers_input: IdentitystoreUserPhoneNumbers
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>

---

##### `preferred_language_input`<sup>Optional</sup> <a name="preferred_language_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.preferredLanguageInput"></a>

```python
preferred_language_input: str
```

- *Type:* str

---

##### `profile_url_input`<sup>Optional</sup> <a name="profile_url_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.profileUrlInput"></a>

```python
profile_url_input: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `user_type_input`<sup>Optional</sup> <a name="user_type_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userTypeInput"></a>

```python
user_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_store_id`<sup>Required</sup> <a name="identity_store_id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.identityStoreId"></a>

```python
identity_store_id: str
```

- *Type:* str

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `nickname`<sup>Required</sup> <a name="nickname" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.nickname"></a>

```python
nickname: str
```

- *Type:* str

---

##### `preferred_language`<sup>Required</sup> <a name="preferred_language" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.preferredLanguage"></a>

```python
preferred_language: str
```

- *Type:* str

---

##### `profile_url`<sup>Required</sup> <a name="profile_url" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.profileUrl"></a>

```python
profile_url: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `user_type`<sup>Required</sup> <a name="user_type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.userType"></a>

```python
user_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentitystoreUserAddresses <a name="IdentitystoreUserAddresses" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import identitystore_user

identitystoreUser.IdentitystoreUserAddresses(
  country: str = None,
  formatted: str = None,
  locality: str = None,
  postal_code: str = None,
  primary: typing.Union[bool, IResolvable] = None,
  region: str = None,
  street_address: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.country">country</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#country IdentitystoreUser#country}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.formatted">formatted</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#formatted IdentitystoreUser#formatted}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.locality">locality</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#locality IdentitystoreUser#locality}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.postalCode">postal_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#postal_code IdentitystoreUser#postal_code}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#region IdentitystoreUser#region}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.streetAddress">street_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#street_address IdentitystoreUser#street_address}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}. |

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.country"></a>

```python
country: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#country IdentitystoreUser#country}.

---

##### `formatted`<sup>Optional</sup> <a name="formatted" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.formatted"></a>

```python
formatted: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#formatted IdentitystoreUser#formatted}.

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.locality"></a>

```python
locality: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#locality IdentitystoreUser#locality}.

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#postal_code IdentitystoreUser#postal_code}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#region IdentitystoreUser#region}.

---

##### `street_address`<sup>Optional</sup> <a name="street_address" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#street_address IdentitystoreUser#street_address}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}.

---

### IdentitystoreUserConfig <a name="IdentitystoreUserConfig" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import identitystore_user

identitystoreUser.IdentitystoreUserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  identity_store_id: str,
  name: IdentitystoreUserName,
  user_name: str,
  addresses: IdentitystoreUserAddresses = None,
  emails: IdentitystoreUserEmails = None,
  id: str = None,
  locale: str = None,
  nickname: str = None,
  phone_numbers: IdentitystoreUserPhoneNumbers = None,
  preferred_language: str = None,
  profile_url: str = None,
  timezone: str = None,
  title: str = None,
  user_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#display_name IdentitystoreUser#display_name}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.identityStoreId">identity_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#identity_store_id IdentitystoreUser#identity_store_id}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.name">name</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | name block. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_name IdentitystoreUser#user_name}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.addresses">addresses</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a></code> | addresses block. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.emails">emails</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a></code> | emails block. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#id IdentitystoreUser#id}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.locale">locale</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#locale IdentitystoreUser#locale}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.nickname">nickname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#nickname IdentitystoreUser#nickname}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.phoneNumbers">phone_numbers</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a></code> | phone_numbers block. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.preferredLanguage">preferred_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#preferred_language IdentitystoreUser#preferred_language}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.profileUrl">profile_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#profile_url IdentitystoreUser#profile_url}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#timezone IdentitystoreUser#timezone}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#title IdentitystoreUser#title}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.userType">user_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_type IdentitystoreUser#user_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#display_name IdentitystoreUser#display_name}.

---

##### `identity_store_id`<sup>Required</sup> <a name="identity_store_id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.identityStoreId"></a>

```python
identity_store_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#identity_store_id IdentitystoreUser#identity_store_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.name"></a>

```python
name: IdentitystoreUserName
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

name block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#name IdentitystoreUser#name}

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_name IdentitystoreUser#user_name}.

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.addresses"></a>

```python
addresses: IdentitystoreUserAddresses
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>

addresses block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#addresses IdentitystoreUser#addresses}

---

##### `emails`<sup>Optional</sup> <a name="emails" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.emails"></a>

```python
emails: IdentitystoreUserEmails
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>

emails block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#emails IdentitystoreUser#emails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#id IdentitystoreUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.locale"></a>

```python
locale: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#locale IdentitystoreUser#locale}.

---

##### `nickname`<sup>Optional</sup> <a name="nickname" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.nickname"></a>

```python
nickname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#nickname IdentitystoreUser#nickname}.

---

##### `phone_numbers`<sup>Optional</sup> <a name="phone_numbers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.phoneNumbers"></a>

```python
phone_numbers: IdentitystoreUserPhoneNumbers
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>

phone_numbers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#phone_numbers IdentitystoreUser#phone_numbers}

---

##### `preferred_language`<sup>Optional</sup> <a name="preferred_language" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.preferredLanguage"></a>

```python
preferred_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#preferred_language IdentitystoreUser#preferred_language}.

---

##### `profile_url`<sup>Optional</sup> <a name="profile_url" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.profileUrl"></a>

```python
profile_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#profile_url IdentitystoreUser#profile_url}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#timezone IdentitystoreUser#timezone}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#title IdentitystoreUser#title}.

---

##### `user_type`<sup>Optional</sup> <a name="user_type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserConfig.property.userType"></a>

```python
user_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#user_type IdentitystoreUser#user_type}.

---

### IdentitystoreUserEmails <a name="IdentitystoreUserEmails" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import identitystore_user

identitystoreUser.IdentitystoreUserEmails(
  primary: typing.Union[bool, IResolvable] = None,
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#value IdentitystoreUser#value}. |

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#value IdentitystoreUser#value}.

---

### IdentitystoreUserExternalIds <a name="IdentitystoreUserExternalIds" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIds.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import identitystore_user

identitystoreUser.IdentitystoreUserExternalIds()
```


### IdentitystoreUserName <a name="IdentitystoreUserName" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import identitystore_user

identitystoreUser.IdentitystoreUserName(
  family_name: str,
  given_name: str,
  formatted: str = None,
  honorific_prefix: str = None,
  honorific_suffix: str = None,
  middle_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.familyName">family_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#family_name IdentitystoreUser#family_name}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.givenName">given_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#given_name IdentitystoreUser#given_name}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.formatted">formatted</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#formatted IdentitystoreUser#formatted}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.honorificPrefix">honorific_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#honorific_prefix IdentitystoreUser#honorific_prefix}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.honorificSuffix">honorific_suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#honorific_suffix IdentitystoreUser#honorific_suffix}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.middleName">middle_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#middle_name IdentitystoreUser#middle_name}. |

---

##### `family_name`<sup>Required</sup> <a name="family_name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.familyName"></a>

```python
family_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#family_name IdentitystoreUser#family_name}.

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#given_name IdentitystoreUser#given_name}.

---

##### `formatted`<sup>Optional</sup> <a name="formatted" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.formatted"></a>

```python
formatted: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#formatted IdentitystoreUser#formatted}.

---

##### `honorific_prefix`<sup>Optional</sup> <a name="honorific_prefix" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.honorificPrefix"></a>

```python
honorific_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#honorific_prefix IdentitystoreUser#honorific_prefix}.

---

##### `honorific_suffix`<sup>Optional</sup> <a name="honorific_suffix" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.honorificSuffix"></a>

```python
honorific_suffix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#honorific_suffix IdentitystoreUser#honorific_suffix}.

---

##### `middle_name`<sup>Optional</sup> <a name="middle_name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#middle_name IdentitystoreUser#middle_name}.

---

### IdentitystoreUserPhoneNumbers <a name="IdentitystoreUserPhoneNumbers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import identitystore_user

identitystoreUser.IdentitystoreUserPhoneNumbers(
  primary: typing.Union[bool, IResolvable] = None,
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#value IdentitystoreUser#value}. |

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#primary IdentitystoreUser#primary}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#type IdentitystoreUser#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/identitystore_user#value IdentitystoreUser#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentitystoreUserAddressesOutputReference <a name="IdentitystoreUserAddressesOutputReference" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import identitystore_user

identitystoreUser.IdentitystoreUserAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetFormatted">reset_formatted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetLocality">reset_locality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetStreetAddress">reset_street_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_country` <a name="reset_country" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_formatted` <a name="reset_formatted" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetFormatted"></a>

```python
def reset_formatted() -> None
```

##### `reset_locality` <a name="reset_locality" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetLocality"></a>

```python
def reset_locality() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_street_address` <a name="reset_street_address" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetStreetAddress"></a>

```python
def reset_street_address() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formattedInput">formatted_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.localityInput">locality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primaryInput">primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddressInput">street_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formatted">formatted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddress">street_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `formatted_input`<sup>Optional</sup> <a name="formatted_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formattedInput"></a>

```python
formatted_input: str
```

- *Type:* str

---

##### `locality_input`<sup>Optional</sup> <a name="locality_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.localityInput"></a>

```python
locality_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primaryInput"></a>

```python
primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `street_address_input`<sup>Optional</sup> <a name="street_address_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddressInput"></a>

```python
street_address_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.formatted"></a>

```python
formatted: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `street_address`<sup>Required</sup> <a name="street_address" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddressesOutputReference.property.internalValue"></a>

```python
internal_value: IdentitystoreUserAddresses
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserAddresses">IdentitystoreUserAddresses</a>

---


### IdentitystoreUserEmailsOutputReference <a name="IdentitystoreUserEmailsOutputReference" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import identitystore_user

identitystoreUser.IdentitystoreUserEmailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_primary` <a name="reset_primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primaryInput">primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primaryInput"></a>

```python
primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmailsOutputReference.property.internalValue"></a>

```python
internal_value: IdentitystoreUserEmails
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserEmails">IdentitystoreUserEmails</a>

---


### IdentitystoreUserExternalIdsList <a name="IdentitystoreUserExternalIdsList" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import identitystore_user

identitystoreUser.IdentitystoreUserExternalIdsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IdentitystoreUserExternalIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IdentitystoreUserExternalIdsOutputReference <a name="IdentitystoreUserExternalIdsOutputReference" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import identitystore_user

identitystoreUser.IdentitystoreUserExternalIdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIds">IdentitystoreUserExternalIds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIdsOutputReference.property.internalValue"></a>

```python
internal_value: IdentitystoreUserExternalIds
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserExternalIds">IdentitystoreUserExternalIds</a>

---


### IdentitystoreUserNameOutputReference <a name="IdentitystoreUserNameOutputReference" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import identitystore_user

identitystoreUser.IdentitystoreUserNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetFormatted">reset_formatted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificPrefix">reset_honorific_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificSuffix">reset_honorific_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetMiddleName">reset_middle_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_formatted` <a name="reset_formatted" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetFormatted"></a>

```python
def reset_formatted() -> None
```

##### `reset_honorific_prefix` <a name="reset_honorific_prefix" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificPrefix"></a>

```python
def reset_honorific_prefix() -> None
```

##### `reset_honorific_suffix` <a name="reset_honorific_suffix" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetHonorificSuffix"></a>

```python
def reset_honorific_suffix() -> None
```

##### `reset_middle_name` <a name="reset_middle_name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.resetMiddleName"></a>

```python
def reset_middle_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyNameInput">family_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.formattedInput">formatted_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenNameInput">given_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefixInput">honorific_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffixInput">honorific_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleNameInput">middle_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyName">family_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.formatted">formatted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefix">honorific_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffix">honorific_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleName">middle_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `family_name_input`<sup>Optional</sup> <a name="family_name_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyNameInput"></a>

```python
family_name_input: str
```

- *Type:* str

---

##### `formatted_input`<sup>Optional</sup> <a name="formatted_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.formattedInput"></a>

```python
formatted_input: str
```

- *Type:* str

---

##### `given_name_input`<sup>Optional</sup> <a name="given_name_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenNameInput"></a>

```python
given_name_input: str
```

- *Type:* str

---

##### `honorific_prefix_input`<sup>Optional</sup> <a name="honorific_prefix_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefixInput"></a>

```python
honorific_prefix_input: str
```

- *Type:* str

---

##### `honorific_suffix_input`<sup>Optional</sup> <a name="honorific_suffix_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffixInput"></a>

```python
honorific_suffix_input: str
```

- *Type:* str

---

##### `middle_name_input`<sup>Optional</sup> <a name="middle_name_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleNameInput"></a>

```python
middle_name_input: str
```

- *Type:* str

---

##### `family_name`<sup>Required</sup> <a name="family_name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.familyName"></a>

```python
family_name: str
```

- *Type:* str

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.formatted"></a>

```python
formatted: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `honorific_prefix`<sup>Required</sup> <a name="honorific_prefix" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificPrefix"></a>

```python
honorific_prefix: str
```

- *Type:* str

---

##### `honorific_suffix`<sup>Required</sup> <a name="honorific_suffix" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.honorificSuffix"></a>

```python
honorific_suffix: str
```

- *Type:* str

---

##### `middle_name`<sup>Required</sup> <a name="middle_name" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserNameOutputReference.property.internalValue"></a>

```python
internal_value: IdentitystoreUserName
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserName">IdentitystoreUserName</a>

---


### IdentitystoreUserPhoneNumbersOutputReference <a name="IdentitystoreUserPhoneNumbersOutputReference" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import identitystore_user

identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_primary` <a name="reset_primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primaryInput">primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primaryInput"></a>

```python
primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbersOutputReference.property.internalValue"></a>

```python
internal_value: IdentitystoreUserPhoneNumbers
```

- *Type:* <a href="#@cdktf/provider-aws.identitystoreUser.IdentitystoreUserPhoneNumbers">IdentitystoreUserPhoneNumbers</a>

---



