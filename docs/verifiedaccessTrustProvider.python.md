# `verifiedaccessTrustProvider` Submodule <a name="`verifiedaccessTrustProvider` Submodule" id="@cdktf/provider-aws.verifiedaccessTrustProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedaccessTrustProvider <a name="VerifiedaccessTrustProvider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider aws_verifiedaccess_trust_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_trust_provider

verifiedaccessTrustProvider.VerifiedaccessTrustProvider(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_reference_name: str,
  trust_provider_type: str,
  description: str = None,
  device_options: VerifiedaccessTrustProviderDeviceOptions = None,
  device_trust_provider_type: str = None,
  id: str = None,
  oidc_options: VerifiedaccessTrustProviderOidcOptions = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: VerifiedaccessTrustProviderTimeouts = None,
  user_trust_provider_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.policyReferenceName">policy_reference_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#policy_reference_name VerifiedaccessTrustProvider#policy_reference_name}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.trustProviderType">trust_provider_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#trust_provider_type VerifiedaccessTrustProvider#trust_provider_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#description VerifiedaccessTrustProvider#description}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.deviceOptions">device_options</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a></code> | device_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.deviceTrustProviderType">device_trust_provider_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#device_trust_provider_type VerifiedaccessTrustProvider#device_trust_provider_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#id VerifiedaccessTrustProvider#id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.oidcOptions">oidc_options</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a></code> | oidc_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#tags VerifiedaccessTrustProvider#tags}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#tags_all VerifiedaccessTrustProvider#tags_all}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.userTrustProviderType">user_trust_provider_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#user_trust_provider_type VerifiedaccessTrustProvider#user_trust_provider_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_reference_name`<sup>Required</sup> <a name="policy_reference_name" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.policyReferenceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#policy_reference_name VerifiedaccessTrustProvider#policy_reference_name}.

---

##### `trust_provider_type`<sup>Required</sup> <a name="trust_provider_type" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.trustProviderType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#trust_provider_type VerifiedaccessTrustProvider#trust_provider_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#description VerifiedaccessTrustProvider#description}.

---

##### `device_options`<sup>Optional</sup> <a name="device_options" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.deviceOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a>

device_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#device_options VerifiedaccessTrustProvider#device_options}

---

##### `device_trust_provider_type`<sup>Optional</sup> <a name="device_trust_provider_type" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.deviceTrustProviderType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#device_trust_provider_type VerifiedaccessTrustProvider#device_trust_provider_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#id VerifiedaccessTrustProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oidc_options`<sup>Optional</sup> <a name="oidc_options" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.oidcOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a>

oidc_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#oidc_options VerifiedaccessTrustProvider#oidc_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#tags VerifiedaccessTrustProvider#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#tags_all VerifiedaccessTrustProvider#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#timeouts VerifiedaccessTrustProvider#timeouts}

---

##### `user_trust_provider_type`<sup>Optional</sup> <a name="user_trust_provider_type" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.userTrustProviderType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#user_trust_provider_type VerifiedaccessTrustProvider#user_trust_provider_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putDeviceOptions">put_device_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putOidcOptions">put_oidc_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDeviceOptions">reset_device_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDeviceTrustProviderType">reset_device_trust_provider_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetOidcOptions">reset_oidc_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetUserTrustProviderType">reset_user_trust_provider_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_device_options` <a name="put_device_options" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putDeviceOptions"></a>

```python
def put_device_options(
  tenant_id: str = None
) -> None
```

###### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putDeviceOptions.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#tenant_id VerifiedaccessTrustProvider#tenant_id}.

---

##### `put_oidc_options` <a name="put_oidc_options" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putOidcOptions"></a>

```python
def put_oidc_options(
  client_secret: str,
  authorization_endpoint: str = None,
  client_id: str = None,
  issuer: str = None,
  scope: str = None,
  token_endpoint: str = None,
  user_info_endpoint: str = None
) -> None
```

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putOidcOptions.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#client_secret VerifiedaccessTrustProvider#client_secret}.

---

###### `authorization_endpoint`<sup>Optional</sup> <a name="authorization_endpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putOidcOptions.parameter.authorizationEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#authorization_endpoint VerifiedaccessTrustProvider#authorization_endpoint}.

---

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putOidcOptions.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#client_id VerifiedaccessTrustProvider#client_id}.

---

###### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putOidcOptions.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#issuer VerifiedaccessTrustProvider#issuer}.

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putOidcOptions.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#scope VerifiedaccessTrustProvider#scope}.

---

###### `token_endpoint`<sup>Optional</sup> <a name="token_endpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putOidcOptions.parameter.tokenEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#token_endpoint VerifiedaccessTrustProvider#token_endpoint}.

---

###### `user_info_endpoint`<sup>Optional</sup> <a name="user_info_endpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putOidcOptions.parameter.userInfoEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#user_info_endpoint VerifiedaccessTrustProvider#user_info_endpoint}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#create VerifiedaccessTrustProvider#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#delete VerifiedaccessTrustProvider#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#update VerifiedaccessTrustProvider#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_device_options` <a name="reset_device_options" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDeviceOptions"></a>

```python
def reset_device_options() -> None
```

##### `reset_device_trust_provider_type` <a name="reset_device_trust_provider_type" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDeviceTrustProviderType"></a>

```python
def reset_device_trust_provider_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_oidc_options` <a name="reset_oidc_options" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetOidcOptions"></a>

```python
def reset_oidc_options() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_trust_provider_type` <a name="reset_user_trust_provider_type" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetUserTrustProviderType"></a>

```python
def reset_user_trust_provider_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VerifiedaccessTrustProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_trust_provider

verifiedaccessTrustProvider.VerifiedaccessTrustProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_trust_provider

verifiedaccessTrustProvider.VerifiedaccessTrustProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_trust_provider

verifiedaccessTrustProvider.VerifiedaccessTrustProvider.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_trust_provider

verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VerifiedaccessTrustProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VerifiedaccessTrustProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VerifiedaccessTrustProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VerifiedaccessTrustProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceOptions">device_options</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference">VerifiedaccessTrustProviderDeviceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.oidcOptions">oidc_options</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference">VerifiedaccessTrustProviderOidcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference">VerifiedaccessTrustProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceOptionsInput">device_options_input</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceTrustProviderTypeInput">device_trust_provider_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.oidcOptionsInput">oidc_options_input</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.policyReferenceNameInput">policy_reference_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.trustProviderTypeInput">trust_provider_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.userTrustProviderTypeInput">user_trust_provider_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceTrustProviderType">device_trust_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.policyReferenceName">policy_reference_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.trustProviderType">trust_provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.userTrustProviderType">user_trust_provider_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `device_options`<sup>Required</sup> <a name="device_options" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceOptions"></a>

```python
device_options: VerifiedaccessTrustProviderDeviceOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference">VerifiedaccessTrustProviderDeviceOptionsOutputReference</a>

---

##### `oidc_options`<sup>Required</sup> <a name="oidc_options" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.oidcOptions"></a>

```python
oidc_options: VerifiedaccessTrustProviderOidcOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference">VerifiedaccessTrustProviderOidcOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.timeouts"></a>

```python
timeouts: VerifiedaccessTrustProviderTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference">VerifiedaccessTrustProviderTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `device_options_input`<sup>Optional</sup> <a name="device_options_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceOptionsInput"></a>

```python
device_options_input: VerifiedaccessTrustProviderDeviceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a>

---

##### `device_trust_provider_type_input`<sup>Optional</sup> <a name="device_trust_provider_type_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceTrustProviderTypeInput"></a>

```python
device_trust_provider_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `oidc_options_input`<sup>Optional</sup> <a name="oidc_options_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.oidcOptionsInput"></a>

```python
oidc_options_input: VerifiedaccessTrustProviderOidcOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a>

---

##### `policy_reference_name_input`<sup>Optional</sup> <a name="policy_reference_name_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.policyReferenceNameInput"></a>

```python
policy_reference_name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VerifiedaccessTrustProviderTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a>]

---

##### `trust_provider_type_input`<sup>Optional</sup> <a name="trust_provider_type_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.trustProviderTypeInput"></a>

```python
trust_provider_type_input: str
```

- *Type:* str

---

##### `user_trust_provider_type_input`<sup>Optional</sup> <a name="user_trust_provider_type_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.userTrustProviderTypeInput"></a>

```python
user_trust_provider_type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_trust_provider_type`<sup>Required</sup> <a name="device_trust_provider_type" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceTrustProviderType"></a>

```python
device_trust_provider_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_reference_name`<sup>Required</sup> <a name="policy_reference_name" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.policyReferenceName"></a>

```python
policy_reference_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `trust_provider_type`<sup>Required</sup> <a name="trust_provider_type" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.trustProviderType"></a>

```python
trust_provider_type: str
```

- *Type:* str

---

##### `user_trust_provider_type`<sup>Required</sup> <a name="user_trust_provider_type" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.userTrustProviderType"></a>

```python
user_trust_provider_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedaccessTrustProviderConfig <a name="VerifiedaccessTrustProviderConfig" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_trust_provider

verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_reference_name: str,
  trust_provider_type: str,
  description: str = None,
  device_options: VerifiedaccessTrustProviderDeviceOptions = None,
  device_trust_provider_type: str = None,
  id: str = None,
  oidc_options: VerifiedaccessTrustProviderOidcOptions = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: VerifiedaccessTrustProviderTimeouts = None,
  user_trust_provider_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.policyReferenceName">policy_reference_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#policy_reference_name VerifiedaccessTrustProvider#policy_reference_name}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.trustProviderType">trust_provider_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#trust_provider_type VerifiedaccessTrustProvider#trust_provider_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#description VerifiedaccessTrustProvider#description}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.deviceOptions">device_options</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a></code> | device_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.deviceTrustProviderType">device_trust_provider_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#device_trust_provider_type VerifiedaccessTrustProvider#device_trust_provider_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#id VerifiedaccessTrustProvider#id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.oidcOptions">oidc_options</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a></code> | oidc_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#tags VerifiedaccessTrustProvider#tags}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#tags_all VerifiedaccessTrustProvider#tags_all}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.userTrustProviderType">user_trust_provider_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#user_trust_provider_type VerifiedaccessTrustProvider#user_trust_provider_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_reference_name`<sup>Required</sup> <a name="policy_reference_name" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.policyReferenceName"></a>

```python
policy_reference_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#policy_reference_name VerifiedaccessTrustProvider#policy_reference_name}.

---

##### `trust_provider_type`<sup>Required</sup> <a name="trust_provider_type" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.trustProviderType"></a>

```python
trust_provider_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#trust_provider_type VerifiedaccessTrustProvider#trust_provider_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#description VerifiedaccessTrustProvider#description}.

---

##### `device_options`<sup>Optional</sup> <a name="device_options" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.deviceOptions"></a>

```python
device_options: VerifiedaccessTrustProviderDeviceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a>

device_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#device_options VerifiedaccessTrustProvider#device_options}

---

##### `device_trust_provider_type`<sup>Optional</sup> <a name="device_trust_provider_type" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.deviceTrustProviderType"></a>

```python
device_trust_provider_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#device_trust_provider_type VerifiedaccessTrustProvider#device_trust_provider_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#id VerifiedaccessTrustProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oidc_options`<sup>Optional</sup> <a name="oidc_options" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.oidcOptions"></a>

```python
oidc_options: VerifiedaccessTrustProviderOidcOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a>

oidc_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#oidc_options VerifiedaccessTrustProvider#oidc_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#tags VerifiedaccessTrustProvider#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#tags_all VerifiedaccessTrustProvider#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.timeouts"></a>

```python
timeouts: VerifiedaccessTrustProviderTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#timeouts VerifiedaccessTrustProvider#timeouts}

---

##### `user_trust_provider_type`<sup>Optional</sup> <a name="user_trust_provider_type" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.userTrustProviderType"></a>

```python
user_trust_provider_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#user_trust_provider_type VerifiedaccessTrustProvider#user_trust_provider_type}.

---

### VerifiedaccessTrustProviderDeviceOptions <a name="VerifiedaccessTrustProviderDeviceOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_trust_provider

verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions(
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#tenant_id VerifiedaccessTrustProvider#tenant_id}. |

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#tenant_id VerifiedaccessTrustProvider#tenant_id}.

---

### VerifiedaccessTrustProviderOidcOptions <a name="VerifiedaccessTrustProviderOidcOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_trust_provider

verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions(
  client_secret: str,
  authorization_endpoint: str = None,
  client_id: str = None,
  issuer: str = None,
  scope: str = None,
  token_endpoint: str = None,
  user_info_endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#client_secret VerifiedaccessTrustProvider#client_secret}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#authorization_endpoint VerifiedaccessTrustProvider#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#client_id VerifiedaccessTrustProvider#client_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#issuer VerifiedaccessTrustProvider#issuer}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#scope VerifiedaccessTrustProvider#scope}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#token_endpoint VerifiedaccessTrustProvider#token_endpoint}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.userInfoEndpoint">user_info_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#user_info_endpoint VerifiedaccessTrustProvider#user_info_endpoint}. |

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#client_secret VerifiedaccessTrustProvider#client_secret}.

---

##### `authorization_endpoint`<sup>Optional</sup> <a name="authorization_endpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#authorization_endpoint VerifiedaccessTrustProvider#authorization_endpoint}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#client_id VerifiedaccessTrustProvider#client_id}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#issuer VerifiedaccessTrustProvider#issuer}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#scope VerifiedaccessTrustProvider#scope}.

---

##### `token_endpoint`<sup>Optional</sup> <a name="token_endpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#token_endpoint VerifiedaccessTrustProvider#token_endpoint}.

---

##### `user_info_endpoint`<sup>Optional</sup> <a name="user_info_endpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.userInfoEndpoint"></a>

```python
user_info_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#user_info_endpoint VerifiedaccessTrustProvider#user_info_endpoint}.

---

### VerifiedaccessTrustProviderTimeouts <a name="VerifiedaccessTrustProviderTimeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_trust_provider

verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#create VerifiedaccessTrustProvider#create}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#delete VerifiedaccessTrustProvider#delete}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#update VerifiedaccessTrustProvider#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#create VerifiedaccessTrustProvider#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#delete VerifiedaccessTrustProvider#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/verifiedaccess_trust_provider#update VerifiedaccessTrustProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedaccessTrustProviderDeviceOptionsOutputReference <a name="VerifiedaccessTrustProviderDeviceOptionsOutputReference" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_trust_provider

verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.internalValue"></a>

```python
internal_value: VerifiedaccessTrustProviderDeviceOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a>

---


### VerifiedaccessTrustProviderOidcOptionsOutputReference <a name="VerifiedaccessTrustProviderOidcOptionsOutputReference" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_trust_provider

verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetAuthorizationEndpoint">reset_authorization_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetTokenEndpoint">reset_token_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetUserInfoEndpoint">reset_user_info_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorization_endpoint` <a name="reset_authorization_endpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetAuthorizationEndpoint"></a>

```python
def reset_authorization_endpoint() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_token_endpoint` <a name="reset_token_endpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetTokenEndpoint"></a>

```python
def reset_token_endpoint() -> None
```

##### `reset_user_info_endpoint` <a name="reset_user_info_endpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetUserInfoEndpoint"></a>

```python
def reset_user_info_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpointInput">authorization_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpointInput">user_info_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpoint">user_info_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_endpoint_input`<sup>Optional</sup> <a name="authorization_endpoint_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpointInput"></a>

```python
authorization_endpoint_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `user_info_endpoint_input`<sup>Optional</sup> <a name="user_info_endpoint_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpointInput"></a>

```python
user_info_endpoint_input: str
```

- *Type:* str

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `user_info_endpoint`<sup>Required</sup> <a name="user_info_endpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpoint"></a>

```python
user_info_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.internalValue"></a>

```python
internal_value: VerifiedaccessTrustProviderOidcOptions
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a>

---


### VerifiedaccessTrustProviderTimeoutsOutputReference <a name="VerifiedaccessTrustProviderTimeoutsOutputReference" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_trust_provider

verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VerifiedaccessTrustProviderTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a>]

---



