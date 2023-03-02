# `transferAccess` Submodule <a name="`transferAccess` Submodule" id="@cdktf/provider-aws.transferAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferAccess <a name="TransferAccess" id="@cdktf/provider-aws.transferAccess.TransferAccess"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_access aws_transfer_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_access

transferAccess.TransferAccess(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_id: str,
  server_id: str,
  home_directory: str = None,
  home_directory_mappings: typing.Union[IResolvable, typing.List[TransferAccessHomeDirectoryMappings]] = None,
  home_directory_type: str = None,
  id: str = None,
  policy: str = None,
  posix_profile: TransferAccessPosixProfile = None,
  role: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#external_id TransferAccess#external_id}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.serverId">server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#server_id TransferAccess#server_id}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.homeDirectory">home_directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#home_directory TransferAccess#home_directory}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.homeDirectoryMappings">home_directory_mappings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings">TransferAccessHomeDirectoryMappings</a>]]</code> | home_directory_mappings block. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.homeDirectoryType">home_directory_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#home_directory_type TransferAccess#home_directory_type}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#id TransferAccess#id}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#policy TransferAccess#policy}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.posixProfile">posix_profile</a></code> | <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile">TransferAccessPosixProfile</a></code> | posix_profile block. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#role TransferAccess#role}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#external_id TransferAccess#external_id}.

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.serverId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#server_id TransferAccess#server_id}.

---

##### `home_directory`<sup>Optional</sup> <a name="home_directory" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.homeDirectory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#home_directory TransferAccess#home_directory}.

---

##### `home_directory_mappings`<sup>Optional</sup> <a name="home_directory_mappings" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.homeDirectoryMappings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings">TransferAccessHomeDirectoryMappings</a>]]

home_directory_mappings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#home_directory_mappings TransferAccess#home_directory_mappings}

---

##### `home_directory_type`<sup>Optional</sup> <a name="home_directory_type" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.homeDirectoryType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#home_directory_type TransferAccess#home_directory_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#id TransferAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.policy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#policy TransferAccess#policy}.

---

##### `posix_profile`<sup>Optional</sup> <a name="posix_profile" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.posixProfile"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile">TransferAccessPosixProfile</a>

posix_profile block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#posix_profile TransferAccess#posix_profile}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-aws.transferAccess.TransferAccess.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#role TransferAccess#role}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.putHomeDirectoryMappings">put_home_directory_mappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.putPosixProfile">put_posix_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.resetHomeDirectory">reset_home_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.resetHomeDirectoryMappings">reset_home_directory_mappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.resetHomeDirectoryType">reset_home_directory_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.resetPosixProfile">reset_posix_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.resetRole">reset_role</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferAccess.TransferAccess.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.transferAccess.TransferAccess.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferAccess.TransferAccess.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferAccess.TransferAccess.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.transferAccess.TransferAccess.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.transferAccess.TransferAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.transferAccess.TransferAccess.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.transferAccess.TransferAccess.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.transferAccess.TransferAccess.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_home_directory_mappings` <a name="put_home_directory_mappings" id="@cdktf/provider-aws.transferAccess.TransferAccess.putHomeDirectoryMappings"></a>

```python
def put_home_directory_mappings(
  value: typing.Union[IResolvable, typing.List[TransferAccessHomeDirectoryMappings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferAccess.TransferAccess.putHomeDirectoryMappings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings">TransferAccessHomeDirectoryMappings</a>]]

---

##### `put_posix_profile` <a name="put_posix_profile" id="@cdktf/provider-aws.transferAccess.TransferAccess.putPosixProfile"></a>

```python
def put_posix_profile(
  gid: typing.Union[int, float],
  uid: typing.Union[int, float],
  secondary_gids: typing.List[typing.Union[int, float]] = None
) -> None
```

###### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-aws.transferAccess.TransferAccess.putPosixProfile.parameter.gid"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#gid TransferAccess#gid}.

---

###### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-aws.transferAccess.TransferAccess.putPosixProfile.parameter.uid"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#uid TransferAccess#uid}.

---

###### `secondary_gids`<sup>Optional</sup> <a name="secondary_gids" id="@cdktf/provider-aws.transferAccess.TransferAccess.putPosixProfile.parameter.secondaryGids"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#secondary_gids TransferAccess#secondary_gids}.

---

##### `reset_home_directory` <a name="reset_home_directory" id="@cdktf/provider-aws.transferAccess.TransferAccess.resetHomeDirectory"></a>

```python
def reset_home_directory() -> None
```

##### `reset_home_directory_mappings` <a name="reset_home_directory_mappings" id="@cdktf/provider-aws.transferAccess.TransferAccess.resetHomeDirectoryMappings"></a>

```python
def reset_home_directory_mappings() -> None
```

##### `reset_home_directory_type` <a name="reset_home_directory_type" id="@cdktf/provider-aws.transferAccess.TransferAccess.resetHomeDirectoryType"></a>

```python
def reset_home_directory_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.transferAccess.TransferAccess.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktf/provider-aws.transferAccess.TransferAccess.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_posix_profile` <a name="reset_posix_profile" id="@cdktf/provider-aws.transferAccess.TransferAccess.resetPosixProfile"></a>

```python
def reset_posix_profile() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktf/provider-aws.transferAccess.TransferAccess.resetRole"></a>

```python
def reset_role() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.transferAccess.TransferAccess.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import transfer_access

transferAccess.TransferAccess.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferAccess.TransferAccess.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.transferAccess.TransferAccess.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import transfer_access

transferAccess.TransferAccess.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferAccess.TransferAccess.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.transferAccess.TransferAccess.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import transfer_access

transferAccess.TransferAccess.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferAccess.TransferAccess.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectoryMappings">home_directory_mappings</a></code> | <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList">TransferAccessHomeDirectoryMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.posixProfile">posix_profile</a></code> | <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference">TransferAccessPosixProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectoryInput">home_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectoryMappingsInput">home_directory_mappings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings">TransferAccessHomeDirectoryMappings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectoryTypeInput">home_directory_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.posixProfileInput">posix_profile_input</a></code> | <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile">TransferAccessPosixProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.serverIdInput">server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectory">home_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectoryType">home_directory_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `home_directory_mappings`<sup>Required</sup> <a name="home_directory_mappings" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectoryMappings"></a>

```python
home_directory_mappings: TransferAccessHomeDirectoryMappingsList
```

- *Type:* <a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList">TransferAccessHomeDirectoryMappingsList</a>

---

##### `posix_profile`<sup>Required</sup> <a name="posix_profile" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.posixProfile"></a>

```python
posix_profile: TransferAccessPosixProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference">TransferAccessPosixProfileOutputReference</a>

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `home_directory_input`<sup>Optional</sup> <a name="home_directory_input" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectoryInput"></a>

```python
home_directory_input: str
```

- *Type:* str

---

##### `home_directory_mappings_input`<sup>Optional</sup> <a name="home_directory_mappings_input" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectoryMappingsInput"></a>

```python
home_directory_mappings_input: typing.Union[IResolvable, typing.List[TransferAccessHomeDirectoryMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings">TransferAccessHomeDirectoryMappings</a>]]

---

##### `home_directory_type_input`<sup>Optional</sup> <a name="home_directory_type_input" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectoryTypeInput"></a>

```python
home_directory_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `posix_profile_input`<sup>Optional</sup> <a name="posix_profile_input" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.posixProfileInput"></a>

```python
posix_profile_input: TransferAccessPosixProfile
```

- *Type:* <a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile">TransferAccessPosixProfile</a>

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `server_id_input`<sup>Optional</sup> <a name="server_id_input" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.serverIdInput"></a>

```python
server_id_input: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `home_directory`<sup>Required</sup> <a name="home_directory" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectory"></a>

```python
home_directory: str
```

- *Type:* str

---

##### `home_directory_type`<sup>Required</sup> <a name="home_directory_type" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.homeDirectoryType"></a>

```python
home_directory_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccess.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.transferAccess.TransferAccess.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TransferAccessConfig <a name="TransferAccessConfig" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_access

transferAccess.TransferAccessConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_id: str,
  server_id: str,
  home_directory: str = None,
  home_directory_mappings: typing.Union[IResolvable, typing.List[TransferAccessHomeDirectoryMappings]] = None,
  home_directory_type: str = None,
  id: str = None,
  policy: str = None,
  posix_profile: TransferAccessPosixProfile = None,
  role: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#external_id TransferAccess#external_id}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.serverId">server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#server_id TransferAccess#server_id}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.homeDirectory">home_directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#home_directory TransferAccess#home_directory}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.homeDirectoryMappings">home_directory_mappings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings">TransferAccessHomeDirectoryMappings</a>]]</code> | home_directory_mappings block. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.homeDirectoryType">home_directory_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#home_directory_type TransferAccess#home_directory_type}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#id TransferAccess#id}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#policy TransferAccess#policy}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.posixProfile">posix_profile</a></code> | <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile">TransferAccessPosixProfile</a></code> | posix_profile block. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#role TransferAccess#role}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#external_id TransferAccess#external_id}.

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#server_id TransferAccess#server_id}.

---

##### `home_directory`<sup>Optional</sup> <a name="home_directory" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.homeDirectory"></a>

```python
home_directory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#home_directory TransferAccess#home_directory}.

---

##### `home_directory_mappings`<sup>Optional</sup> <a name="home_directory_mappings" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.homeDirectoryMappings"></a>

```python
home_directory_mappings: typing.Union[IResolvable, typing.List[TransferAccessHomeDirectoryMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings">TransferAccessHomeDirectoryMappings</a>]]

home_directory_mappings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#home_directory_mappings TransferAccess#home_directory_mappings}

---

##### `home_directory_type`<sup>Optional</sup> <a name="home_directory_type" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.homeDirectoryType"></a>

```python
home_directory_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#home_directory_type TransferAccess#home_directory_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#id TransferAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#policy TransferAccess#policy}.

---

##### `posix_profile`<sup>Optional</sup> <a name="posix_profile" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.posixProfile"></a>

```python
posix_profile: TransferAccessPosixProfile
```

- *Type:* <a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile">TransferAccessPosixProfile</a>

posix_profile block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#posix_profile TransferAccess#posix_profile}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-aws.transferAccess.TransferAccessConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#role TransferAccess#role}.

---

### TransferAccessHomeDirectoryMappings <a name="TransferAccessHomeDirectoryMappings" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_access

transferAccess.TransferAccessHomeDirectoryMappings(
  entry: str,
  target: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings.property.entry">entry</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#entry TransferAccess#entry}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#target TransferAccess#target}. |

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings.property.entry"></a>

```python
entry: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#entry TransferAccess#entry}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#target TransferAccess#target}.

---

### TransferAccessPosixProfile <a name="TransferAccessPosixProfile" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_access

transferAccess.TransferAccessPosixProfile(
  gid: typing.Union[int, float],
  uid: typing.Union[int, float],
  secondary_gids: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile.property.gid">gid</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#gid TransferAccess#gid}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile.property.uid">uid</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#uid TransferAccess#uid}. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile.property.secondaryGids">secondary_gids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#secondary_gids TransferAccess#secondary_gids}. |

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile.property.gid"></a>

```python
gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#gid TransferAccess#gid}.

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile.property.uid"></a>

```python
uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#uid TransferAccess#uid}.

---

##### `secondary_gids`<sup>Optional</sup> <a name="secondary_gids" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile.property.secondaryGids"></a>

```python
secondary_gids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transfer_access#secondary_gids TransferAccess#secondary_gids}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferAccessHomeDirectoryMappingsList <a name="TransferAccessHomeDirectoryMappingsList" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_access

transferAccess.TransferAccessHomeDirectoryMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TransferAccessHomeDirectoryMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings">TransferAccessHomeDirectoryMappings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TransferAccessHomeDirectoryMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings">TransferAccessHomeDirectoryMappings</a>]]

---


### TransferAccessHomeDirectoryMappingsOutputReference <a name="TransferAccessHomeDirectoryMappingsOutputReference" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_access

transferAccess.TransferAccessHomeDirectoryMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.entryInput">entry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.entry">entry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings">TransferAccessHomeDirectoryMappings</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entry_input`<sup>Optional</sup> <a name="entry_input" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.entryInput"></a>

```python
entry_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.entry"></a>

```python
entry: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[TransferAccessHomeDirectoryMappings, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.transferAccess.TransferAccessHomeDirectoryMappings">TransferAccessHomeDirectoryMappings</a>, cdktf.IResolvable]

---


### TransferAccessPosixProfileOutputReference <a name="TransferAccessPosixProfileOutputReference" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import transfer_access

transferAccess.TransferAccessPosixProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.resetSecondaryGids">reset_secondary_gids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secondary_gids` <a name="reset_secondary_gids" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.resetSecondaryGids"></a>

```python
def reset_secondary_gids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.gidInput">gid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.secondaryGidsInput">secondary_gids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.uidInput">uid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.gid">gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.secondaryGids">secondary_gids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.uid">uid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile">TransferAccessPosixProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gid_input`<sup>Optional</sup> <a name="gid_input" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.gidInput"></a>

```python
gid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secondary_gids_input`<sup>Optional</sup> <a name="secondary_gids_input" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.secondaryGidsInput"></a>

```python
secondary_gids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `uid_input`<sup>Optional</sup> <a name="uid_input" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.uidInput"></a>

```python
uid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.gid"></a>

```python
gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secondary_gids`<sup>Required</sup> <a name="secondary_gids" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.secondaryGids"></a>

```python
secondary_gids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.uid"></a>

```python
uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.transferAccess.TransferAccessPosixProfileOutputReference.property.internalValue"></a>

```python
internal_value: TransferAccessPosixProfile
```

- *Type:* <a href="#@cdktf/provider-aws.transferAccess.TransferAccessPosixProfile">TransferAccessPosixProfile</a>

---



