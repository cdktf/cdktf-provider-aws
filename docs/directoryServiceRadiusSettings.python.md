# `directoryServiceRadiusSettings` Submodule <a name="`directoryServiceRadiusSettings` Submodule" id="@cdktf/provider-aws.directoryServiceRadiusSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceRadiusSettings <a name="DirectoryServiceRadiusSettings" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings aws_directory_service_radius_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_radius_settings

directoryServiceRadiusSettings.DirectoryServiceRadiusSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authentication_protocol: str,
  directory_id: str,
  display_label: str,
  radius_port: typing.Union[int, float],
  radius_retries: typing.Union[int, float],
  radius_servers: typing.List[str],
  radius_timeout: typing.Union[int, float],
  shared_secret: str,
  id: str = None,
  timeouts: DirectoryServiceRadiusSettingsTimeouts = None,
  use_same_username: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.authenticationProtocol">authentication_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#authentication_protocol DirectoryServiceRadiusSettings#authentication_protocol}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#directory_id DirectoryServiceRadiusSettings#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.displayLabel">display_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#display_label DirectoryServiceRadiusSettings#display_label}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.radiusPort">radius_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_port DirectoryServiceRadiusSettings#radius_port}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.radiusRetries">radius_retries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_retries DirectoryServiceRadiusSettings#radius_retries}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.radiusServers">radius_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_servers DirectoryServiceRadiusSettings#radius_servers}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.radiusTimeout">radius_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_timeout DirectoryServiceRadiusSettings#radius_timeout}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.sharedSecret">shared_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#shared_secret DirectoryServiceRadiusSettings#shared_secret}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#id DirectoryServiceRadiusSettings#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.useSameUsername">use_same_username</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#use_same_username DirectoryServiceRadiusSettings#use_same_username}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authentication_protocol`<sup>Required</sup> <a name="authentication_protocol" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.authenticationProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#authentication_protocol DirectoryServiceRadiusSettings#authentication_protocol}.

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#directory_id DirectoryServiceRadiusSettings#directory_id}.

---

##### `display_label`<sup>Required</sup> <a name="display_label" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.displayLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#display_label DirectoryServiceRadiusSettings#display_label}.

---

##### `radius_port`<sup>Required</sup> <a name="radius_port" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.radiusPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_port DirectoryServiceRadiusSettings#radius_port}.

---

##### `radius_retries`<sup>Required</sup> <a name="radius_retries" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.radiusRetries"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_retries DirectoryServiceRadiusSettings#radius_retries}.

---

##### `radius_servers`<sup>Required</sup> <a name="radius_servers" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.radiusServers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_servers DirectoryServiceRadiusSettings#radius_servers}.

---

##### `radius_timeout`<sup>Required</sup> <a name="radius_timeout" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.radiusTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_timeout DirectoryServiceRadiusSettings#radius_timeout}.

---

##### `shared_secret`<sup>Required</sup> <a name="shared_secret" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.sharedSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#shared_secret DirectoryServiceRadiusSettings#shared_secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#id DirectoryServiceRadiusSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#timeouts DirectoryServiceRadiusSettings#timeouts}

---

##### `use_same_username`<sup>Optional</sup> <a name="use_same_username" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.Initializer.parameter.useSameUsername"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#use_same_username DirectoryServiceRadiusSettings#use_same_username}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetUseSameUsername">reset_use_same_username</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#create DirectoryServiceRadiusSettings#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#update DirectoryServiceRadiusSettings#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_use_same_username` <a name="reset_use_same_username" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.resetUseSameUsername"></a>

```python
def reset_use_same_username() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_radius_settings

directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_radius_settings

directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_radius_settings

directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference">DirectoryServiceRadiusSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.authenticationProtocolInput">authentication_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.displayLabelInput">display_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusPortInput">radius_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusRetriesInput">radius_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusServersInput">radius_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusTimeoutInput">radius_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.sharedSecretInput">shared_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.useSameUsernameInput">use_same_username_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.authenticationProtocol">authentication_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.displayLabel">display_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusPort">radius_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusRetries">radius_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusServers">radius_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusTimeout">radius_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.sharedSecret">shared_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.useSameUsername">use_same_username</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.timeouts"></a>

```python
timeouts: DirectoryServiceRadiusSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference">DirectoryServiceRadiusSettingsTimeoutsOutputReference</a>

---

##### `authentication_protocol_input`<sup>Optional</sup> <a name="authentication_protocol_input" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.authenticationProtocolInput"></a>

```python
authentication_protocol_input: str
```

- *Type:* str

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `display_label_input`<sup>Optional</sup> <a name="display_label_input" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.displayLabelInput"></a>

```python
display_label_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `radius_port_input`<sup>Optional</sup> <a name="radius_port_input" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusPortInput"></a>

```python
radius_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `radius_retries_input`<sup>Optional</sup> <a name="radius_retries_input" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusRetriesInput"></a>

```python
radius_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `radius_servers_input`<sup>Optional</sup> <a name="radius_servers_input" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusServersInput"></a>

```python
radius_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `radius_timeout_input`<sup>Optional</sup> <a name="radius_timeout_input" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusTimeoutInput"></a>

```python
radius_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shared_secret_input`<sup>Optional</sup> <a name="shared_secret_input" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.sharedSecretInput"></a>

```python
shared_secret_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DirectoryServiceRadiusSettingsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a>, cdktf.IResolvable]

---

##### `use_same_username_input`<sup>Optional</sup> <a name="use_same_username_input" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.useSameUsernameInput"></a>

```python
use_same_username_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authentication_protocol`<sup>Required</sup> <a name="authentication_protocol" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.authenticationProtocol"></a>

```python
authentication_protocol: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `display_label`<sup>Required</sup> <a name="display_label" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.displayLabel"></a>

```python
display_label: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `radius_port`<sup>Required</sup> <a name="radius_port" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusPort"></a>

```python
radius_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `radius_retries`<sup>Required</sup> <a name="radius_retries" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusRetries"></a>

```python
radius_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `radius_servers`<sup>Required</sup> <a name="radius_servers" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusServers"></a>

```python
radius_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `radius_timeout`<sup>Required</sup> <a name="radius_timeout" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.radiusTimeout"></a>

```python
radius_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shared_secret`<sup>Required</sup> <a name="shared_secret" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.sharedSecret"></a>

```python
shared_secret: str
```

- *Type:* str

---

##### `use_same_username`<sup>Required</sup> <a name="use_same_username" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.useSameUsername"></a>

```python
use_same_username: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceRadiusSettingsConfig <a name="DirectoryServiceRadiusSettingsConfig" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_radius_settings

directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authentication_protocol: str,
  directory_id: str,
  display_label: str,
  radius_port: typing.Union[int, float],
  radius_retries: typing.Union[int, float],
  radius_servers: typing.List[str],
  radius_timeout: typing.Union[int, float],
  shared_secret: str,
  id: str = None,
  timeouts: DirectoryServiceRadiusSettingsTimeouts = None,
  use_same_username: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.authenticationProtocol">authentication_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#authentication_protocol DirectoryServiceRadiusSettings#authentication_protocol}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#directory_id DirectoryServiceRadiusSettings#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.displayLabel">display_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#display_label DirectoryServiceRadiusSettings#display_label}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusPort">radius_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_port DirectoryServiceRadiusSettings#radius_port}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusRetries">radius_retries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_retries DirectoryServiceRadiusSettings#radius_retries}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusServers">radius_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_servers DirectoryServiceRadiusSettings#radius_servers}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusTimeout">radius_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_timeout DirectoryServiceRadiusSettings#radius_timeout}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.sharedSecret">shared_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#shared_secret DirectoryServiceRadiusSettings#shared_secret}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#id DirectoryServiceRadiusSettings#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.useSameUsername">use_same_username</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#use_same_username DirectoryServiceRadiusSettings#use_same_username}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authentication_protocol`<sup>Required</sup> <a name="authentication_protocol" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.authenticationProtocol"></a>

```python
authentication_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#authentication_protocol DirectoryServiceRadiusSettings#authentication_protocol}.

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#directory_id DirectoryServiceRadiusSettings#directory_id}.

---

##### `display_label`<sup>Required</sup> <a name="display_label" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.displayLabel"></a>

```python
display_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#display_label DirectoryServiceRadiusSettings#display_label}.

---

##### `radius_port`<sup>Required</sup> <a name="radius_port" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusPort"></a>

```python
radius_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_port DirectoryServiceRadiusSettings#radius_port}.

---

##### `radius_retries`<sup>Required</sup> <a name="radius_retries" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusRetries"></a>

```python
radius_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_retries DirectoryServiceRadiusSettings#radius_retries}.

---

##### `radius_servers`<sup>Required</sup> <a name="radius_servers" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusServers"></a>

```python
radius_servers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_servers DirectoryServiceRadiusSettings#radius_servers}.

---

##### `radius_timeout`<sup>Required</sup> <a name="radius_timeout" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.radiusTimeout"></a>

```python
radius_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#radius_timeout DirectoryServiceRadiusSettings#radius_timeout}.

---

##### `shared_secret`<sup>Required</sup> <a name="shared_secret" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.sharedSecret"></a>

```python
shared_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#shared_secret DirectoryServiceRadiusSettings#shared_secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#id DirectoryServiceRadiusSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.timeouts"></a>

```python
timeouts: DirectoryServiceRadiusSettingsTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#timeouts DirectoryServiceRadiusSettings#timeouts}

---

##### `use_same_username`<sup>Optional</sup> <a name="use_same_username" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsConfig.property.useSameUsername"></a>

```python
use_same_username: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#use_same_username DirectoryServiceRadiusSettings#use_same_username}.

---

### DirectoryServiceRadiusSettingsTimeouts <a name="DirectoryServiceRadiusSettingsTimeouts" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_radius_settings

directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#create DirectoryServiceRadiusSettings#create}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#update DirectoryServiceRadiusSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#create DirectoryServiceRadiusSettings#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_radius_settings#update DirectoryServiceRadiusSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceRadiusSettingsTimeoutsOutputReference <a name="DirectoryServiceRadiusSettingsTimeoutsOutputReference" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_radius_settings

directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DirectoryServiceRadiusSettingsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.directoryServiceRadiusSettings.DirectoryServiceRadiusSettingsTimeouts">DirectoryServiceRadiusSettingsTimeouts</a>, cdktf.IResolvable]

---



