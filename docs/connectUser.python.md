# `connectUser` Submodule <a name="`connectUser` Submodule" id="@cdktf/provider-aws.connectUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectUser <a name="ConnectUser" id="@cdktf/provider-aws.connectUser.ConnectUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_user aws_connect_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_user

connectUser.ConnectUser(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  name: str,
  phone_config: ConnectUserPhoneConfig,
  routing_profile_id: str,
  security_profile_ids: typing.List[str],
  directory_user_id: str = None,
  hierarchy_group_id: str = None,
  id: str = None,
  identity_info: ConnectUserIdentityInfo = None,
  password: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#instance_id ConnectUser#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#name ConnectUser#name}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.phoneConfig">phone_config</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | phone_config block. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.routingProfileId">routing_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#routing_profile_id ConnectUser#routing_profile_id}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.securityProfileIds">security_profile_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#security_profile_ids ConnectUser#security_profile_ids}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.directoryUserId">directory_user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#directory_user_id ConnectUser#directory_user_id}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.hierarchyGroupId">hierarchy_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#hierarchy_group_id ConnectUser#hierarchy_group_id}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#id ConnectUser#id}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.identityInfo">identity_info</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | identity_info block. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#password ConnectUser#password}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#tags ConnectUser#tags}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#tags_all ConnectUser#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#instance_id ConnectUser#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#name ConnectUser#name}.

---

##### `phone_config`<sup>Required</sup> <a name="phone_config" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.phoneConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

phone_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#phone_config ConnectUser#phone_config}

---

##### `routing_profile_id`<sup>Required</sup> <a name="routing_profile_id" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.routingProfileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#routing_profile_id ConnectUser#routing_profile_id}.

---

##### `security_profile_ids`<sup>Required</sup> <a name="security_profile_ids" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.securityProfileIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#security_profile_ids ConnectUser#security_profile_ids}.

---

##### `directory_user_id`<sup>Optional</sup> <a name="directory_user_id" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.directoryUserId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#directory_user_id ConnectUser#directory_user_id}.

---

##### `hierarchy_group_id`<sup>Optional</sup> <a name="hierarchy_group_id" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.hierarchyGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#hierarchy_group_id ConnectUser#hierarchy_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#id ConnectUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_info`<sup>Optional</sup> <a name="identity_info" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.identityInfo"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

identity_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#identity_info ConnectUser#identity_info}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#password ConnectUser#password}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#tags ConnectUser#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.connectUser.ConnectUser.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#tags_all ConnectUser#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.putIdentityInfo">put_identity_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.putPhoneConfig">put_phone_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetDirectoryUserId">reset_directory_user_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetHierarchyGroupId">reset_hierarchy_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetIdentityInfo">reset_identity_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectUser.ConnectUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.connectUser.ConnectUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectUser.ConnectUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectUser.ConnectUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.connectUser.ConnectUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.connectUser.ConnectUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.connectUser.ConnectUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.connectUser.ConnectUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.connectUser.ConnectUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.connectUser.ConnectUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_identity_info` <a name="put_identity_info" id="@cdktf/provider-aws.connectUser.ConnectUser.putIdentityInfo"></a>

```python
def put_identity_info(
  email: str = None,
  first_name: str = None,
  last_name: str = None
) -> None
```

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.connectUser.ConnectUser.putIdentityInfo.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#email ConnectUser#email}.

---

###### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-aws.connectUser.ConnectUser.putIdentityInfo.parameter.firstName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#first_name ConnectUser#first_name}.

---

###### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-aws.connectUser.ConnectUser.putIdentityInfo.parameter.lastName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#last_name ConnectUser#last_name}.

---

##### `put_phone_config` <a name="put_phone_config" id="@cdktf/provider-aws.connectUser.ConnectUser.putPhoneConfig"></a>

```python
def put_phone_config(
  phone_type: str,
  after_contact_work_time_limit: typing.Union[int, float] = None,
  auto_accept: typing.Union[bool, IResolvable] = None,
  desk_phone_number: str = None
) -> None
```

###### `phone_type`<sup>Required</sup> <a name="phone_type" id="@cdktf/provider-aws.connectUser.ConnectUser.putPhoneConfig.parameter.phoneType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#phone_type ConnectUser#phone_type}.

---

###### `after_contact_work_time_limit`<sup>Optional</sup> <a name="after_contact_work_time_limit" id="@cdktf/provider-aws.connectUser.ConnectUser.putPhoneConfig.parameter.afterContactWorkTimeLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}.

---

###### `auto_accept`<sup>Optional</sup> <a name="auto_accept" id="@cdktf/provider-aws.connectUser.ConnectUser.putPhoneConfig.parameter.autoAccept"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#auto_accept ConnectUser#auto_accept}.

---

###### `desk_phone_number`<sup>Optional</sup> <a name="desk_phone_number" id="@cdktf/provider-aws.connectUser.ConnectUser.putPhoneConfig.parameter.deskPhoneNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#desk_phone_number ConnectUser#desk_phone_number}.

---

##### `reset_directory_user_id` <a name="reset_directory_user_id" id="@cdktf/provider-aws.connectUser.ConnectUser.resetDirectoryUserId"></a>

```python
def reset_directory_user_id() -> None
```

##### `reset_hierarchy_group_id` <a name="reset_hierarchy_group_id" id="@cdktf/provider-aws.connectUser.ConnectUser.resetHierarchyGroupId"></a>

```python
def reset_hierarchy_group_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.connectUser.ConnectUser.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_info` <a name="reset_identity_info" id="@cdktf/provider-aws.connectUser.ConnectUser.resetIdentityInfo"></a>

```python
def reset_identity_info() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-aws.connectUser.ConnectUser.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.connectUser.ConnectUser.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.connectUser.ConnectUser.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.connectUser.ConnectUser.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import connect_user

connectUser.ConnectUser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectUser.ConnectUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.connectUser.ConnectUser.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import connect_user

connectUser.ConnectUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectUser.ConnectUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.connectUser.ConnectUser.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import connect_user

connectUser.ConnectUser.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectUser.ConnectUser.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.identityInfo">identity_info</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference">ConnectUserIdentityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.phoneConfig">phone_config</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference">ConnectUserPhoneConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.directoryUserIdInput">directory_user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.hierarchyGroupIdInput">hierarchy_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.identityInfoInput">identity_info_input</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.phoneConfigInput">phone_config_input</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.routingProfileIdInput">routing_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.securityProfileIdsInput">security_profile_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.directoryUserId">directory_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.hierarchyGroupId">hierarchy_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.routingProfileId">routing_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.securityProfileIds">security_profile_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.connectUser.ConnectUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.connectUser.ConnectUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUser.ConnectUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.connectUser.ConnectUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.connectUser.ConnectUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.connectUser.ConnectUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.connectUser.ConnectUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectUser.ConnectUser.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectUser.ConnectUser.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.connectUser.ConnectUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.connectUser.ConnectUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectUser.ConnectUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectUser.ConnectUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectUser.ConnectUser.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectUser.ConnectUser.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `identity_info`<sup>Required</sup> <a name="identity_info" id="@cdktf/provider-aws.connectUser.ConnectUser.property.identityInfo"></a>

```python
identity_info: ConnectUserIdentityInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference">ConnectUserIdentityInfoOutputReference</a>

---

##### `phone_config`<sup>Required</sup> <a name="phone_config" id="@cdktf/provider-aws.connectUser.ConnectUser.property.phoneConfig"></a>

```python
phone_config: ConnectUserPhoneConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference">ConnectUserPhoneConfigOutputReference</a>

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-aws.connectUser.ConnectUser.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `directory_user_id_input`<sup>Optional</sup> <a name="directory_user_id_input" id="@cdktf/provider-aws.connectUser.ConnectUser.property.directoryUserIdInput"></a>

```python
directory_user_id_input: str
```

- *Type:* str

---

##### `hierarchy_group_id_input`<sup>Optional</sup> <a name="hierarchy_group_id_input" id="@cdktf/provider-aws.connectUser.ConnectUser.property.hierarchyGroupIdInput"></a>

```python
hierarchy_group_id_input: str
```

- *Type:* str

---

##### `identity_info_input`<sup>Optional</sup> <a name="identity_info_input" id="@cdktf/provider-aws.connectUser.ConnectUser.property.identityInfoInput"></a>

```python
identity_info_input: ConnectUserIdentityInfo
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.connectUser.ConnectUser.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-aws.connectUser.ConnectUser.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.connectUser.ConnectUser.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-aws.connectUser.ConnectUser.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `phone_config_input`<sup>Optional</sup> <a name="phone_config_input" id="@cdktf/provider-aws.connectUser.ConnectUser.property.phoneConfigInput"></a>

```python
phone_config_input: ConnectUserPhoneConfig
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

---

##### `routing_profile_id_input`<sup>Optional</sup> <a name="routing_profile_id_input" id="@cdktf/provider-aws.connectUser.ConnectUser.property.routingProfileIdInput"></a>

```python
routing_profile_id_input: str
```

- *Type:* str

---

##### `security_profile_ids_input`<sup>Optional</sup> <a name="security_profile_ids_input" id="@cdktf/provider-aws.connectUser.ConnectUser.property.securityProfileIdsInput"></a>

```python
security_profile_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.connectUser.ConnectUser.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.connectUser.ConnectUser.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `directory_user_id`<sup>Required</sup> <a name="directory_user_id" id="@cdktf/provider-aws.connectUser.ConnectUser.property.directoryUserId"></a>

```python
directory_user_id: str
```

- *Type:* str

---

##### `hierarchy_group_id`<sup>Required</sup> <a name="hierarchy_group_id" id="@cdktf/provider-aws.connectUser.ConnectUser.property.hierarchyGroupId"></a>

```python
hierarchy_group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUser.ConnectUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.connectUser.ConnectUser.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUser.ConnectUser.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.connectUser.ConnectUser.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `routing_profile_id`<sup>Required</sup> <a name="routing_profile_id" id="@cdktf/provider-aws.connectUser.ConnectUser.property.routingProfileId"></a>

```python
routing_profile_id: str
```

- *Type:* str

---

##### `security_profile_ids`<sup>Required</sup> <a name="security_profile_ids" id="@cdktf/provider-aws.connectUser.ConnectUser.property.securityProfileIds"></a>

```python
security_profile_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.connectUser.ConnectUser.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.connectUser.ConnectUser.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.connectUser.ConnectUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectUserConfig <a name="ConnectUserConfig" id="@cdktf/provider-aws.connectUser.ConnectUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_user

connectUser.ConnectUserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  name: str,
  phone_config: ConnectUserPhoneConfig,
  routing_profile_id: str,
  security_profile_ids: typing.List[str],
  directory_user_id: str = None,
  hierarchy_group_id: str = None,
  id: str = None,
  identity_info: ConnectUserIdentityInfo = None,
  password: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#instance_id ConnectUser#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#name ConnectUser#name}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.phoneConfig">phone_config</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | phone_config block. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.routingProfileId">routing_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#routing_profile_id ConnectUser#routing_profile_id}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.securityProfileIds">security_profile_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#security_profile_ids ConnectUser#security_profile_ids}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.directoryUserId">directory_user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#directory_user_id ConnectUser#directory_user_id}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.hierarchyGroupId">hierarchy_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#hierarchy_group_id ConnectUser#hierarchy_group_id}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#id ConnectUser#id}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.identityInfo">identity_info</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | identity_info block. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#password ConnectUser#password}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#tags ConnectUser#tags}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#tags_all ConnectUser#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#instance_id ConnectUser#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#name ConnectUser#name}.

---

##### `phone_config`<sup>Required</sup> <a name="phone_config" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.phoneConfig"></a>

```python
phone_config: ConnectUserPhoneConfig
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

phone_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#phone_config ConnectUser#phone_config}

---

##### `routing_profile_id`<sup>Required</sup> <a name="routing_profile_id" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.routingProfileId"></a>

```python
routing_profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#routing_profile_id ConnectUser#routing_profile_id}.

---

##### `security_profile_ids`<sup>Required</sup> <a name="security_profile_ids" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.securityProfileIds"></a>

```python
security_profile_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#security_profile_ids ConnectUser#security_profile_ids}.

---

##### `directory_user_id`<sup>Optional</sup> <a name="directory_user_id" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.directoryUserId"></a>

```python
directory_user_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#directory_user_id ConnectUser#directory_user_id}.

---

##### `hierarchy_group_id`<sup>Optional</sup> <a name="hierarchy_group_id" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.hierarchyGroupId"></a>

```python
hierarchy_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#hierarchy_group_id ConnectUser#hierarchy_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#id ConnectUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_info`<sup>Optional</sup> <a name="identity_info" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.identityInfo"></a>

```python
identity_info: ConnectUserIdentityInfo
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

identity_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#identity_info ConnectUser#identity_info}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#password ConnectUser#password}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#tags ConnectUser#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.connectUser.ConnectUserConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#tags_all ConnectUser#tags_all}.

---

### ConnectUserIdentityInfo <a name="ConnectUserIdentityInfo" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_user

connectUser.ConnectUserIdentityInfo(
  email: str = None,
  first_name: str = None,
  last_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#email ConnectUser#email}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo.property.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#first_name ConnectUser#first_name}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo.property.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#last_name ConnectUser#last_name}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#email ConnectUser#email}.

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#first_name ConnectUser#first_name}.

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#last_name ConnectUser#last_name}.

---

### ConnectUserPhoneConfig <a name="ConnectUserPhoneConfig" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_user

connectUser.ConnectUserPhoneConfig(
  phone_type: str,
  after_contact_work_time_limit: typing.Union[int, float] = None,
  auto_accept: typing.Union[bool, IResolvable] = None,
  desk_phone_number: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.phoneType">phone_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#phone_type ConnectUser#phone_type}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.afterContactWorkTimeLimit">after_contact_work_time_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.autoAccept">auto_accept</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#auto_accept ConnectUser#auto_accept}. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.deskPhoneNumber">desk_phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#desk_phone_number ConnectUser#desk_phone_number}. |

---

##### `phone_type`<sup>Required</sup> <a name="phone_type" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.phoneType"></a>

```python
phone_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#phone_type ConnectUser#phone_type}.

---

##### `after_contact_work_time_limit`<sup>Optional</sup> <a name="after_contact_work_time_limit" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.afterContactWorkTimeLimit"></a>

```python
after_contact_work_time_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}.

---

##### `auto_accept`<sup>Optional</sup> <a name="auto_accept" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.autoAccept"></a>

```python
auto_accept: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#auto_accept ConnectUser#auto_accept}.

---

##### `desk_phone_number`<sup>Optional</sup> <a name="desk_phone_number" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig.property.deskPhoneNumber"></a>

```python
desk_phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user#desk_phone_number ConnectUser#desk_phone_number}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectUserIdentityInfoOutputReference <a name="ConnectUserIdentityInfoOutputReference" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_user

connectUser.ConnectUserIdentityInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resetLastName">reset_last_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_first_name` <a name="reset_first_name" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resetFirstName"></a>

```python
def reset_first_name() -> None
```

##### `reset_last_name` <a name="reset_last_name" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.resetLastName"></a>

```python
def reset_last_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.connectUser.ConnectUserIdentityInfoOutputReference.property.internalValue"></a>

```python
internal_value: ConnectUserIdentityInfo
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserIdentityInfo">ConnectUserIdentityInfo</a>

---


### ConnectUserPhoneConfigOutputReference <a name="ConnectUserPhoneConfigOutputReference" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import connect_user

connectUser.ConnectUserPhoneConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resetAfterContactWorkTimeLimit">reset_after_contact_work_time_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resetAutoAccept">reset_auto_accept</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resetDeskPhoneNumber">reset_desk_phone_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_after_contact_work_time_limit` <a name="reset_after_contact_work_time_limit" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resetAfterContactWorkTimeLimit"></a>

```python
def reset_after_contact_work_time_limit() -> None
```

##### `reset_auto_accept` <a name="reset_auto_accept" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resetAutoAccept"></a>

```python
def reset_auto_accept() -> None
```

##### `reset_desk_phone_number` <a name="reset_desk_phone_number" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.resetDeskPhoneNumber"></a>

```python
def reset_desk_phone_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimitInput">after_contact_work_time_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAcceptInput">auto_accept_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumberInput">desk_phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneTypeInput">phone_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimit">after_contact_work_time_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAccept">auto_accept</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumber">desk_phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneType">phone_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `after_contact_work_time_limit_input`<sup>Optional</sup> <a name="after_contact_work_time_limit_input" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimitInput"></a>

```python
after_contact_work_time_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_accept_input`<sup>Optional</sup> <a name="auto_accept_input" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAcceptInput"></a>

```python
auto_accept_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `desk_phone_number_input`<sup>Optional</sup> <a name="desk_phone_number_input" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumberInput"></a>

```python
desk_phone_number_input: str
```

- *Type:* str

---

##### `phone_type_input`<sup>Optional</sup> <a name="phone_type_input" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneTypeInput"></a>

```python
phone_type_input: str
```

- *Type:* str

---

##### `after_contact_work_time_limit`<sup>Required</sup> <a name="after_contact_work_time_limit" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```python
after_contact_work_time_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_accept`<sup>Required</sup> <a name="auto_accept" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.autoAccept"></a>

```python
auto_accept: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `desk_phone_number`<sup>Required</sup> <a name="desk_phone_number" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.deskPhoneNumber"></a>

```python
desk_phone_number: str
```

- *Type:* str

---

##### `phone_type`<sup>Required</sup> <a name="phone_type" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.phoneType"></a>

```python
phone_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.connectUser.ConnectUserPhoneConfigOutputReference.property.internalValue"></a>

```python
internal_value: ConnectUserPhoneConfig
```

- *Type:* <a href="#@cdktf/provider-aws.connectUser.ConnectUserPhoneConfig">ConnectUserPhoneConfig</a>

---



