# `pinpointApnsVoipSandboxChannel` Submodule <a name="`pinpointApnsVoipSandboxChannel` Submodule" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointApnsVoipSandboxChannel <a name="PinpointApnsVoipSandboxChannel" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel aws_pinpoint_apns_voip_sandbox_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_apns_voip_sandbox_channel

pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel(
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
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#application_id PinpointApnsVoipSandboxChannel#application_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.bundleId">bundle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#bundle_id PinpointApnsVoipSandboxChannel#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.certificate">certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#certificate PinpointApnsVoipSandboxChannel#certificate}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.defaultAuthenticationMethod">default_authentication_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#default_authentication_method PinpointApnsVoipSandboxChannel#default_authentication_method}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#enabled PinpointApnsVoipSandboxChannel#enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#id PinpointApnsVoipSandboxChannel#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#private_key PinpointApnsVoipSandboxChannel#private_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#team_id PinpointApnsVoipSandboxChannel#team_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.tokenKey">token_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#token_key PinpointApnsVoipSandboxChannel#token_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.tokenKeyId">token_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#token_key_id PinpointApnsVoipSandboxChannel#token_key_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#application_id PinpointApnsVoipSandboxChannel#application_id}.

---

##### `bundle_id`<sup>Optional</sup> <a name="bundle_id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.bundleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#bundle_id PinpointApnsVoipSandboxChannel#bundle_id}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.certificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#certificate PinpointApnsVoipSandboxChannel#certificate}.

---

##### `default_authentication_method`<sup>Optional</sup> <a name="default_authentication_method" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.defaultAuthenticationMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#default_authentication_method PinpointApnsVoipSandboxChannel#default_authentication_method}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#enabled PinpointApnsVoipSandboxChannel#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#id PinpointApnsVoipSandboxChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.privateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#private_key PinpointApnsVoipSandboxChannel#private_key}.

---

##### `team_id`<sup>Optional</sup> <a name="team_id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.teamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#team_id PinpointApnsVoipSandboxChannel#team_id}.

---

##### `token_key`<sup>Optional</sup> <a name="token_key" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.tokenKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#token_key PinpointApnsVoipSandboxChannel#token_key}.

---

##### `token_key_id`<sup>Optional</sup> <a name="token_key_id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.tokenKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#token_key_id PinpointApnsVoipSandboxChannel#token_key_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetBundleId">reset_bundle_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetDefaultAuthenticationMethod">reset_default_authentication_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetPrivateKey">reset_private_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetTeamId">reset_team_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetTokenKey">reset_token_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetTokenKeyId">reset_token_key_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_bundle_id` <a name="reset_bundle_id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetBundleId"></a>

```python
def reset_bundle_id() -> None
```

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_default_authentication_method` <a name="reset_default_authentication_method" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetDefaultAuthenticationMethod"></a>

```python
def reset_default_authentication_method() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```

##### `reset_team_id` <a name="reset_team_id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetTeamId"></a>

```python
def reset_team_id() -> None
```

##### `reset_token_key` <a name="reset_token_key" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetTokenKey"></a>

```python
def reset_token_key() -> None
```

##### `reset_token_key_id` <a name="reset_token_key_id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetTokenKeyId"></a>

```python
def reset_token_key_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_apns_voip_sandbox_channel

pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_apns_voip_sandbox_channel

pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_apns_voip_sandbox_channel

pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.bundleIdInput">bundle_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.defaultAuthenticationMethodInput">default_authentication_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKeyIdInput">token_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKeyInput">token_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.bundleId">bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.defaultAuthenticationMethod">default_authentication_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKey">token_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKeyId">token_key_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `bundle_id_input`<sup>Optional</sup> <a name="bundle_id_input" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.bundleIdInput"></a>

```python
bundle_id_input: str
```

- *Type:* str

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `default_authentication_method_input`<sup>Optional</sup> <a name="default_authentication_method_input" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.defaultAuthenticationMethodInput"></a>

```python
default_authentication_method_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `token_key_id_input`<sup>Optional</sup> <a name="token_key_id_input" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKeyIdInput"></a>

```python
token_key_id_input: str
```

- *Type:* str

---

##### `token_key_input`<sup>Optional</sup> <a name="token_key_input" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKeyInput"></a>

```python
token_key_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `default_authentication_method`<sup>Required</sup> <a name="default_authentication_method" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.defaultAuthenticationMethod"></a>

```python
default_authentication_method: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

##### `token_key`<sup>Required</sup> <a name="token_key" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKey"></a>

```python
token_key: str
```

- *Type:* str

---

##### `token_key_id`<sup>Required</sup> <a name="token_key_id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKeyId"></a>

```python
token_key_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointApnsVoipSandboxChannelConfig <a name="PinpointApnsVoipSandboxChannelConfig" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_apns_voip_sandbox_channel

pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig(
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
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#application_id PinpointApnsVoipSandboxChannel#application_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.bundleId">bundle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#bundle_id PinpointApnsVoipSandboxChannel#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.certificate">certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#certificate PinpointApnsVoipSandboxChannel#certificate}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.defaultAuthenticationMethod">default_authentication_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#default_authentication_method PinpointApnsVoipSandboxChannel#default_authentication_method}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#enabled PinpointApnsVoipSandboxChannel#enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#id PinpointApnsVoipSandboxChannel#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#private_key PinpointApnsVoipSandboxChannel#private_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#team_id PinpointApnsVoipSandboxChannel#team_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.tokenKey">token_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#token_key PinpointApnsVoipSandboxChannel#token_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.tokenKeyId">token_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#token_key_id PinpointApnsVoipSandboxChannel#token_key_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#application_id PinpointApnsVoipSandboxChannel#application_id}.

---

##### `bundle_id`<sup>Optional</sup> <a name="bundle_id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#bundle_id PinpointApnsVoipSandboxChannel#bundle_id}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#certificate PinpointApnsVoipSandboxChannel#certificate}.

---

##### `default_authentication_method`<sup>Optional</sup> <a name="default_authentication_method" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.defaultAuthenticationMethod"></a>

```python
default_authentication_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#default_authentication_method PinpointApnsVoipSandboxChannel#default_authentication_method}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#enabled PinpointApnsVoipSandboxChannel#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#id PinpointApnsVoipSandboxChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#private_key PinpointApnsVoipSandboxChannel#private_key}.

---

##### `team_id`<sup>Optional</sup> <a name="team_id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#team_id PinpointApnsVoipSandboxChannel#team_id}.

---

##### `token_key`<sup>Optional</sup> <a name="token_key" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.tokenKey"></a>

```python
token_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#token_key PinpointApnsVoipSandboxChannel#token_key}.

---

##### `token_key_id`<sup>Optional</sup> <a name="token_key_id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.tokenKeyId"></a>

```python
token_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#token_key_id PinpointApnsVoipSandboxChannel#token_key_id}.

---



