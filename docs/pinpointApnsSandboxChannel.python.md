# `pinpointApnsSandboxChannel` Submodule <a name="`pinpointApnsSandboxChannel` Submodule" id="@cdktf/provider-aws.pinpointApnsSandboxChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointApnsSandboxChannel <a name="PinpointApnsSandboxChannel" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel aws_pinpoint_apns_sandbox_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_apns_sandbox_channel

pinpointApnsSandboxChannel.PinpointApnsSandboxChannel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  bundle_id: str = None,
  certificate: str = None,
  default_authentication_method: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  private_key: str = None,
  team_id: str = None,
  token_key: str = None,
  token_key_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#application_id PinpointApnsSandboxChannel#application_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.bundleId">bundle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#bundle_id PinpointApnsSandboxChannel#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.certificate">certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#certificate PinpointApnsSandboxChannel#certificate}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.defaultAuthenticationMethod">default_authentication_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#default_authentication_method PinpointApnsSandboxChannel#default_authentication_method}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#enabled PinpointApnsSandboxChannel#enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#id PinpointApnsSandboxChannel#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#private_key PinpointApnsSandboxChannel#private_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#team_id PinpointApnsSandboxChannel#team_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.tokenKey">token_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#token_key PinpointApnsSandboxChannel#token_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.tokenKeyId">token_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#token_key_id PinpointApnsSandboxChannel#token_key_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#application_id PinpointApnsSandboxChannel#application_id}.

---

##### `bundle_id`<sup>Optional</sup> <a name="bundle_id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.bundleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#bundle_id PinpointApnsSandboxChannel#bundle_id}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.certificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#certificate PinpointApnsSandboxChannel#certificate}.

---

##### `default_authentication_method`<sup>Optional</sup> <a name="default_authentication_method" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.defaultAuthenticationMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#default_authentication_method PinpointApnsSandboxChannel#default_authentication_method}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#enabled PinpointApnsSandboxChannel#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#id PinpointApnsSandboxChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.privateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#private_key PinpointApnsSandboxChannel#private_key}.

---

##### `team_id`<sup>Optional</sup> <a name="team_id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.teamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#team_id PinpointApnsSandboxChannel#team_id}.

---

##### `token_key`<sup>Optional</sup> <a name="token_key" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.tokenKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#token_key PinpointApnsSandboxChannel#token_key}.

---

##### `token_key_id`<sup>Optional</sup> <a name="token_key_id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.Initializer.parameter.tokenKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#token_key_id PinpointApnsSandboxChannel#token_key_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetBundleId">reset_bundle_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetDefaultAuthenticationMethod">reset_default_authentication_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetPrivateKey">reset_private_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTeamId">reset_team_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTokenKey">reset_token_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTokenKeyId">reset_token_key_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_bundle_id` <a name="reset_bundle_id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetBundleId"></a>

```python
def reset_bundle_id() -> None
```

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_default_authentication_method` <a name="reset_default_authentication_method" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetDefaultAuthenticationMethod"></a>

```python
def reset_default_authentication_method() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```

##### `reset_team_id` <a name="reset_team_id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTeamId"></a>

```python
def reset_team_id() -> None
```

##### `reset_token_key` <a name="reset_token_key" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTokenKey"></a>

```python
def reset_token_key() -> None
```

##### `reset_token_key_id` <a name="reset_token_key_id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.resetTokenKeyId"></a>

```python
def reset_token_key_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_apns_sandbox_channel

pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_apns_sandbox_channel

pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_apns_sandbox_channel

pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.bundleIdInput">bundle_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.defaultAuthenticationMethodInput">default_authentication_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyIdInput">token_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyInput">token_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.bundleId">bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.defaultAuthenticationMethod">default_authentication_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKey">token_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyId">token_key_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `bundle_id_input`<sup>Optional</sup> <a name="bundle_id_input" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.bundleIdInput"></a>

```python
bundle_id_input: str
```

- *Type:* str

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `default_authentication_method_input`<sup>Optional</sup> <a name="default_authentication_method_input" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.defaultAuthenticationMethodInput"></a>

```python
default_authentication_method_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `token_key_id_input`<sup>Optional</sup> <a name="token_key_id_input" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyIdInput"></a>

```python
token_key_id_input: str
```

- *Type:* str

---

##### `token_key_input`<sup>Optional</sup> <a name="token_key_input" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyInput"></a>

```python
token_key_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `default_authentication_method`<sup>Required</sup> <a name="default_authentication_method" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.defaultAuthenticationMethod"></a>

```python
default_authentication_method: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

##### `token_key`<sup>Required</sup> <a name="token_key" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKey"></a>

```python
token_key: str
```

- *Type:* str

---

##### `token_key_id`<sup>Required</sup> <a name="token_key_id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tokenKeyId"></a>

```python
token_key_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointApnsSandboxChannelConfig <a name="PinpointApnsSandboxChannelConfig" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_apns_sandbox_channel

pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  bundle_id: str = None,
  certificate: str = None,
  default_authentication_method: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  private_key: str = None,
  team_id: str = None,
  token_key: str = None,
  token_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#application_id PinpointApnsSandboxChannel#application_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.bundleId">bundle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#bundle_id PinpointApnsSandboxChannel#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.certificate">certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#certificate PinpointApnsSandboxChannel#certificate}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.defaultAuthenticationMethod">default_authentication_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#default_authentication_method PinpointApnsSandboxChannel#default_authentication_method}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#enabled PinpointApnsSandboxChannel#enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#id PinpointApnsSandboxChannel#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#private_key PinpointApnsSandboxChannel#private_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#team_id PinpointApnsSandboxChannel#team_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.tokenKey">token_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#token_key PinpointApnsSandboxChannel#token_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.tokenKeyId">token_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#token_key_id PinpointApnsSandboxChannel#token_key_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#application_id PinpointApnsSandboxChannel#application_id}.

---

##### `bundle_id`<sup>Optional</sup> <a name="bundle_id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#bundle_id PinpointApnsSandboxChannel#bundle_id}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#certificate PinpointApnsSandboxChannel#certificate}.

---

##### `default_authentication_method`<sup>Optional</sup> <a name="default_authentication_method" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.defaultAuthenticationMethod"></a>

```python
default_authentication_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#default_authentication_method PinpointApnsSandboxChannel#default_authentication_method}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#enabled PinpointApnsSandboxChannel#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#id PinpointApnsSandboxChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#private_key PinpointApnsSandboxChannel#private_key}.

---

##### `team_id`<sup>Optional</sup> <a name="team_id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#team_id PinpointApnsSandboxChannel#team_id}.

---

##### `token_key`<sup>Optional</sup> <a name="token_key" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.tokenKey"></a>

```python
token_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#token_key PinpointApnsSandboxChannel#token_key}.

---

##### `token_key_id`<sup>Optional</sup> <a name="token_key_id" id="@cdktf/provider-aws.pinpointApnsSandboxChannel.PinpointApnsSandboxChannelConfig.property.tokenKeyId"></a>

```python
token_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel#token_key_id PinpointApnsSandboxChannel#token_key_id}.

---



