# `kmsCustomKeyStore` Submodule <a name="`kmsCustomKeyStore` Submodule" id="@cdktf/provider-aws.kmsCustomKeyStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsCustomKeyStore <a name="KmsCustomKeyStore" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store aws_kms_custom_key_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kms_custom_key_store

kmsCustomKeyStore.KmsCustomKeyStore(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_key_store_name: str,
  cloud_hsm_cluster_id: str = None,
  custom_key_store_type: str = None,
  id: str = None,
  key_store_password: str = None,
  region: str = None,
  timeouts: KmsCustomKeyStoreTimeouts = None,
  trust_anchor_certificate: str = None,
  xks_proxy_authentication_credential: KmsCustomKeyStoreXksProxyAuthenticationCredential = None,
  xks_proxy_connectivity: str = None,
  xks_proxy_uri_endpoint: str = None,
  xks_proxy_uri_path: str = None,
  xks_proxy_vpc_endpoint_service_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.customKeyStoreName">custom_key_store_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#custom_key_store_name KmsCustomKeyStore#custom_key_store_name}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.cloudHsmClusterId">cloud_hsm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#cloud_hsm_cluster_id KmsCustomKeyStore#cloud_hsm_cluster_id}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.customKeyStoreType">custom_key_store_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#custom_key_store_type KmsCustomKeyStore#custom_key_store_type}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#id KmsCustomKeyStore#id}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.keyStorePassword">key_store_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#key_store_password KmsCustomKeyStore#key_store_password}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.trustAnchorCertificate">trust_anchor_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#trust_anchor_certificate KmsCustomKeyStore#trust_anchor_certificate}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.xksProxyAuthenticationCredential">xks_proxy_authentication_credential</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a></code> | xks_proxy_authentication_credential block. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.xksProxyConnectivity">xks_proxy_connectivity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#xks_proxy_connectivity KmsCustomKeyStore#xks_proxy_connectivity}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.xksProxyUriEndpoint">xks_proxy_uri_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#xks_proxy_uri_endpoint KmsCustomKeyStore#xks_proxy_uri_endpoint}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.xksProxyUriPath">xks_proxy_uri_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#xks_proxy_uri_path KmsCustomKeyStore#xks_proxy_uri_path}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.xksProxyVpcEndpointServiceName">xks_proxy_vpc_endpoint_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#xks_proxy_vpc_endpoint_service_name KmsCustomKeyStore#xks_proxy_vpc_endpoint_service_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_key_store_name`<sup>Required</sup> <a name="custom_key_store_name" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.customKeyStoreName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#custom_key_store_name KmsCustomKeyStore#custom_key_store_name}.

---

##### `cloud_hsm_cluster_id`<sup>Optional</sup> <a name="cloud_hsm_cluster_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.cloudHsmClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#cloud_hsm_cluster_id KmsCustomKeyStore#cloud_hsm_cluster_id}.

---

##### `custom_key_store_type`<sup>Optional</sup> <a name="custom_key_store_type" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.customKeyStoreType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#custom_key_store_type KmsCustomKeyStore#custom_key_store_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#id KmsCustomKeyStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_store_password`<sup>Optional</sup> <a name="key_store_password" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.keyStorePassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#key_store_password KmsCustomKeyStore#key_store_password}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#region KmsCustomKeyStore#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#timeouts KmsCustomKeyStore#timeouts}

---

##### `trust_anchor_certificate`<sup>Optional</sup> <a name="trust_anchor_certificate" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.trustAnchorCertificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#trust_anchor_certificate KmsCustomKeyStore#trust_anchor_certificate}.

---

##### `xks_proxy_authentication_credential`<sup>Optional</sup> <a name="xks_proxy_authentication_credential" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.xksProxyAuthenticationCredential"></a>

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a>

xks_proxy_authentication_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#xks_proxy_authentication_credential KmsCustomKeyStore#xks_proxy_authentication_credential}

---

##### `xks_proxy_connectivity`<sup>Optional</sup> <a name="xks_proxy_connectivity" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.xksProxyConnectivity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#xks_proxy_connectivity KmsCustomKeyStore#xks_proxy_connectivity}.

---

##### `xks_proxy_uri_endpoint`<sup>Optional</sup> <a name="xks_proxy_uri_endpoint" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.xksProxyUriEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#xks_proxy_uri_endpoint KmsCustomKeyStore#xks_proxy_uri_endpoint}.

---

##### `xks_proxy_uri_path`<sup>Optional</sup> <a name="xks_proxy_uri_path" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.xksProxyUriPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#xks_proxy_uri_path KmsCustomKeyStore#xks_proxy_uri_path}.

---

##### `xks_proxy_vpc_endpoint_service_name`<sup>Optional</sup> <a name="xks_proxy_vpc_endpoint_service_name" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.xksProxyVpcEndpointServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#xks_proxy_vpc_endpoint_service_name KmsCustomKeyStore#xks_proxy_vpc_endpoint_service_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putXksProxyAuthenticationCredential">put_xks_proxy_authentication_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetCloudHsmClusterId">reset_cloud_hsm_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetCustomKeyStoreType">reset_custom_key_store_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetKeyStorePassword">reset_key_store_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetTrustAnchorCertificate">reset_trust_anchor_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyAuthenticationCredential">reset_xks_proxy_authentication_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyConnectivity">reset_xks_proxy_connectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyUriEndpoint">reset_xks_proxy_uri_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyUriPath">reset_xks_proxy_uri_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyVpcEndpointServiceName">reset_xks_proxy_vpc_endpoint_service_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#create KmsCustomKeyStore#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#delete KmsCustomKeyStore#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#update KmsCustomKeyStore#update}.

---

##### `put_xks_proxy_authentication_credential` <a name="put_xks_proxy_authentication_credential" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putXksProxyAuthenticationCredential"></a>

```python
def put_xks_proxy_authentication_credential(
  access_key_id: str,
  raw_secret_access_key: str
) -> None
```

###### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putXksProxyAuthenticationCredential.parameter.accessKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#access_key_id KmsCustomKeyStore#access_key_id}.

---

###### `raw_secret_access_key`<sup>Required</sup> <a name="raw_secret_access_key" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putXksProxyAuthenticationCredential.parameter.rawSecretAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#raw_secret_access_key KmsCustomKeyStore#raw_secret_access_key}.

---

##### `reset_cloud_hsm_cluster_id` <a name="reset_cloud_hsm_cluster_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetCloudHsmClusterId"></a>

```python
def reset_cloud_hsm_cluster_id() -> None
```

##### `reset_custom_key_store_type` <a name="reset_custom_key_store_type" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetCustomKeyStoreType"></a>

```python
def reset_custom_key_store_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_store_password` <a name="reset_key_store_password" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetKeyStorePassword"></a>

```python
def reset_key_store_password() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_trust_anchor_certificate` <a name="reset_trust_anchor_certificate" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetTrustAnchorCertificate"></a>

```python
def reset_trust_anchor_certificate() -> None
```

##### `reset_xks_proxy_authentication_credential` <a name="reset_xks_proxy_authentication_credential" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyAuthenticationCredential"></a>

```python
def reset_xks_proxy_authentication_credential() -> None
```

##### `reset_xks_proxy_connectivity` <a name="reset_xks_proxy_connectivity" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyConnectivity"></a>

```python
def reset_xks_proxy_connectivity() -> None
```

##### `reset_xks_proxy_uri_endpoint` <a name="reset_xks_proxy_uri_endpoint" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyUriEndpoint"></a>

```python
def reset_xks_proxy_uri_endpoint() -> None
```

##### `reset_xks_proxy_uri_path` <a name="reset_xks_proxy_uri_path" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyUriPath"></a>

```python
def reset_xks_proxy_uri_path() -> None
```

##### `reset_xks_proxy_vpc_endpoint_service_name` <a name="reset_xks_proxy_vpc_endpoint_service_name" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyVpcEndpointServiceName"></a>

```python
def reset_xks_proxy_vpc_endpoint_service_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KmsCustomKeyStore resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import kms_custom_key_store

kmsCustomKeyStore.KmsCustomKeyStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import kms_custom_key_store

kmsCustomKeyStore.KmsCustomKeyStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import kms_custom_key_store

kmsCustomKeyStore.KmsCustomKeyStore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import kms_custom_key_store

kmsCustomKeyStore.KmsCustomKeyStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KmsCustomKeyStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KmsCustomKeyStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KmsCustomKeyStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KmsCustomKeyStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference">KmsCustomKeyStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyAuthenticationCredential">xks_proxy_authentication_credential</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference">KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cloudHsmClusterIdInput">cloud_hsm_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreNameInput">custom_key_store_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreTypeInput">custom_key_store_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.keyStorePasswordInput">key_store_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.trustAnchorCertificateInput">trust_anchor_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyAuthenticationCredentialInput">xks_proxy_authentication_credential_input</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyConnectivityInput">xks_proxy_connectivity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriEndpointInput">xks_proxy_uri_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriPathInput">xks_proxy_uri_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyVpcEndpointServiceNameInput">xks_proxy_vpc_endpoint_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cloudHsmClusterId">cloud_hsm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreName">custom_key_store_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreType">custom_key_store_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.keyStorePassword">key_store_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.trustAnchorCertificate">trust_anchor_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyConnectivity">xks_proxy_connectivity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriEndpoint">xks_proxy_uri_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriPath">xks_proxy_uri_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyVpcEndpointServiceName">xks_proxy_vpc_endpoint_service_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.timeouts"></a>

```python
timeouts: KmsCustomKeyStoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference">KmsCustomKeyStoreTimeoutsOutputReference</a>

---

##### `xks_proxy_authentication_credential`<sup>Required</sup> <a name="xks_proxy_authentication_credential" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyAuthenticationCredential"></a>

```python
xks_proxy_authentication_credential: KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference">KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference</a>

---

##### `cloud_hsm_cluster_id_input`<sup>Optional</sup> <a name="cloud_hsm_cluster_id_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cloudHsmClusterIdInput"></a>

```python
cloud_hsm_cluster_id_input: str
```

- *Type:* str

---

##### `custom_key_store_name_input`<sup>Optional</sup> <a name="custom_key_store_name_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreNameInput"></a>

```python
custom_key_store_name_input: str
```

- *Type:* str

---

##### `custom_key_store_type_input`<sup>Optional</sup> <a name="custom_key_store_type_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreTypeInput"></a>

```python
custom_key_store_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_store_password_input`<sup>Optional</sup> <a name="key_store_password_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.keyStorePasswordInput"></a>

```python
key_store_password_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KmsCustomKeyStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>]

---

##### `trust_anchor_certificate_input`<sup>Optional</sup> <a name="trust_anchor_certificate_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.trustAnchorCertificateInput"></a>

```python
trust_anchor_certificate_input: str
```

- *Type:* str

---

##### `xks_proxy_authentication_credential_input`<sup>Optional</sup> <a name="xks_proxy_authentication_credential_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyAuthenticationCredentialInput"></a>

```python
xks_proxy_authentication_credential_input: KmsCustomKeyStoreXksProxyAuthenticationCredential
```

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a>

---

##### `xks_proxy_connectivity_input`<sup>Optional</sup> <a name="xks_proxy_connectivity_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyConnectivityInput"></a>

```python
xks_proxy_connectivity_input: str
```

- *Type:* str

---

##### `xks_proxy_uri_endpoint_input`<sup>Optional</sup> <a name="xks_proxy_uri_endpoint_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriEndpointInput"></a>

```python
xks_proxy_uri_endpoint_input: str
```

- *Type:* str

---

##### `xks_proxy_uri_path_input`<sup>Optional</sup> <a name="xks_proxy_uri_path_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriPathInput"></a>

```python
xks_proxy_uri_path_input: str
```

- *Type:* str

---

##### `xks_proxy_vpc_endpoint_service_name_input`<sup>Optional</sup> <a name="xks_proxy_vpc_endpoint_service_name_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyVpcEndpointServiceNameInput"></a>

```python
xks_proxy_vpc_endpoint_service_name_input: str
```

- *Type:* str

---

##### `cloud_hsm_cluster_id`<sup>Required</sup> <a name="cloud_hsm_cluster_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cloudHsmClusterId"></a>

```python
cloud_hsm_cluster_id: str
```

- *Type:* str

---

##### `custom_key_store_name`<sup>Required</sup> <a name="custom_key_store_name" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreName"></a>

```python
custom_key_store_name: str
```

- *Type:* str

---

##### `custom_key_store_type`<sup>Required</sup> <a name="custom_key_store_type" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreType"></a>

```python
custom_key_store_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_store_password`<sup>Required</sup> <a name="key_store_password" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.keyStorePassword"></a>

```python
key_store_password: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `trust_anchor_certificate`<sup>Required</sup> <a name="trust_anchor_certificate" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.trustAnchorCertificate"></a>

```python
trust_anchor_certificate: str
```

- *Type:* str

---

##### `xks_proxy_connectivity`<sup>Required</sup> <a name="xks_proxy_connectivity" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyConnectivity"></a>

```python
xks_proxy_connectivity: str
```

- *Type:* str

---

##### `xks_proxy_uri_endpoint`<sup>Required</sup> <a name="xks_proxy_uri_endpoint" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriEndpoint"></a>

```python
xks_proxy_uri_endpoint: str
```

- *Type:* str

---

##### `xks_proxy_uri_path`<sup>Required</sup> <a name="xks_proxy_uri_path" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriPath"></a>

```python
xks_proxy_uri_path: str
```

- *Type:* str

---

##### `xks_proxy_vpc_endpoint_service_name`<sup>Required</sup> <a name="xks_proxy_vpc_endpoint_service_name" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyVpcEndpointServiceName"></a>

```python
xks_proxy_vpc_endpoint_service_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KmsCustomKeyStoreConfig <a name="KmsCustomKeyStoreConfig" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kms_custom_key_store

kmsCustomKeyStore.KmsCustomKeyStoreConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_key_store_name: str,
  cloud_hsm_cluster_id: str = None,
  custom_key_store_type: str = None,
  id: str = None,
  key_store_password: str = None,
  region: str = None,
  timeouts: KmsCustomKeyStoreTimeouts = None,
  trust_anchor_certificate: str = None,
  xks_proxy_authentication_credential: KmsCustomKeyStoreXksProxyAuthenticationCredential = None,
  xks_proxy_connectivity: str = None,
  xks_proxy_uri_endpoint: str = None,
  xks_proxy_uri_path: str = None,
  xks_proxy_vpc_endpoint_service_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.customKeyStoreName">custom_key_store_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#custom_key_store_name KmsCustomKeyStore#custom_key_store_name}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.cloudHsmClusterId">cloud_hsm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#cloud_hsm_cluster_id KmsCustomKeyStore#cloud_hsm_cluster_id}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.customKeyStoreType">custom_key_store_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#custom_key_store_type KmsCustomKeyStore#custom_key_store_type}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#id KmsCustomKeyStore#id}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.keyStorePassword">key_store_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#key_store_password KmsCustomKeyStore#key_store_password}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.trustAnchorCertificate">trust_anchor_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#trust_anchor_certificate KmsCustomKeyStore#trust_anchor_certificate}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyAuthenticationCredential">xks_proxy_authentication_credential</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a></code> | xks_proxy_authentication_credential block. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyConnectivity">xks_proxy_connectivity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#xks_proxy_connectivity KmsCustomKeyStore#xks_proxy_connectivity}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyUriEndpoint">xks_proxy_uri_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#xks_proxy_uri_endpoint KmsCustomKeyStore#xks_proxy_uri_endpoint}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyUriPath">xks_proxy_uri_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#xks_proxy_uri_path KmsCustomKeyStore#xks_proxy_uri_path}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyVpcEndpointServiceName">xks_proxy_vpc_endpoint_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#xks_proxy_vpc_endpoint_service_name KmsCustomKeyStore#xks_proxy_vpc_endpoint_service_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_key_store_name`<sup>Required</sup> <a name="custom_key_store_name" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.customKeyStoreName"></a>

```python
custom_key_store_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#custom_key_store_name KmsCustomKeyStore#custom_key_store_name}.

---

##### `cloud_hsm_cluster_id`<sup>Optional</sup> <a name="cloud_hsm_cluster_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.cloudHsmClusterId"></a>

```python
cloud_hsm_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#cloud_hsm_cluster_id KmsCustomKeyStore#cloud_hsm_cluster_id}.

---

##### `custom_key_store_type`<sup>Optional</sup> <a name="custom_key_store_type" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.customKeyStoreType"></a>

```python
custom_key_store_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#custom_key_store_type KmsCustomKeyStore#custom_key_store_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#id KmsCustomKeyStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_store_password`<sup>Optional</sup> <a name="key_store_password" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.keyStorePassword"></a>

```python
key_store_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#key_store_password KmsCustomKeyStore#key_store_password}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#region KmsCustomKeyStore#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.timeouts"></a>

```python
timeouts: KmsCustomKeyStoreTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#timeouts KmsCustomKeyStore#timeouts}

---

##### `trust_anchor_certificate`<sup>Optional</sup> <a name="trust_anchor_certificate" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.trustAnchorCertificate"></a>

```python
trust_anchor_certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#trust_anchor_certificate KmsCustomKeyStore#trust_anchor_certificate}.

---

##### `xks_proxy_authentication_credential`<sup>Optional</sup> <a name="xks_proxy_authentication_credential" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyAuthenticationCredential"></a>

```python
xks_proxy_authentication_credential: KmsCustomKeyStoreXksProxyAuthenticationCredential
```

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a>

xks_proxy_authentication_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#xks_proxy_authentication_credential KmsCustomKeyStore#xks_proxy_authentication_credential}

---

##### `xks_proxy_connectivity`<sup>Optional</sup> <a name="xks_proxy_connectivity" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyConnectivity"></a>

```python
xks_proxy_connectivity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#xks_proxy_connectivity KmsCustomKeyStore#xks_proxy_connectivity}.

---

##### `xks_proxy_uri_endpoint`<sup>Optional</sup> <a name="xks_proxy_uri_endpoint" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyUriEndpoint"></a>

```python
xks_proxy_uri_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#xks_proxy_uri_endpoint KmsCustomKeyStore#xks_proxy_uri_endpoint}.

---

##### `xks_proxy_uri_path`<sup>Optional</sup> <a name="xks_proxy_uri_path" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyUriPath"></a>

```python
xks_proxy_uri_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#xks_proxy_uri_path KmsCustomKeyStore#xks_proxy_uri_path}.

---

##### `xks_proxy_vpc_endpoint_service_name`<sup>Optional</sup> <a name="xks_proxy_vpc_endpoint_service_name" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyVpcEndpointServiceName"></a>

```python
xks_proxy_vpc_endpoint_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#xks_proxy_vpc_endpoint_service_name KmsCustomKeyStore#xks_proxy_vpc_endpoint_service_name}.

---

### KmsCustomKeyStoreTimeouts <a name="KmsCustomKeyStoreTimeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kms_custom_key_store

kmsCustomKeyStore.KmsCustomKeyStoreTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#create KmsCustomKeyStore#create}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#delete KmsCustomKeyStore#delete}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#update KmsCustomKeyStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#create KmsCustomKeyStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#delete KmsCustomKeyStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#update KmsCustomKeyStore#update}.

---

### KmsCustomKeyStoreXksProxyAuthenticationCredential <a name="KmsCustomKeyStoreXksProxyAuthenticationCredential" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kms_custom_key_store

kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential(
  access_key_id: str,
  raw_secret_access_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential.property.accessKeyId">access_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#access_key_id KmsCustomKeyStore#access_key_id}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential.property.rawSecretAccessKey">raw_secret_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#raw_secret_access_key KmsCustomKeyStore#raw_secret_access_key}. |

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#access_key_id KmsCustomKeyStore#access_key_id}.

---

##### `raw_secret_access_key`<sup>Required</sup> <a name="raw_secret_access_key" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential.property.rawSecretAccessKey"></a>

```python
raw_secret_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/kms_custom_key_store#raw_secret_access_key KmsCustomKeyStore#raw_secret_access_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsCustomKeyStoreTimeoutsOutputReference <a name="KmsCustomKeyStoreTimeoutsOutputReference" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kms_custom_key_store

kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KmsCustomKeyStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>]

---


### KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference <a name="KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kms_custom_key_store

kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.accessKeyIdInput">access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.rawSecretAccessKeyInput">raw_secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.rawSecretAccessKey">raw_secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_key_id_input`<sup>Optional</sup> <a name="access_key_id_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.accessKeyIdInput"></a>

```python
access_key_id_input: str
```

- *Type:* str

---

##### `raw_secret_access_key_input`<sup>Optional</sup> <a name="raw_secret_access_key_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.rawSecretAccessKeyInput"></a>

```python
raw_secret_access_key_input: str
```

- *Type:* str

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `raw_secret_access_key`<sup>Required</sup> <a name="raw_secret_access_key" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.rawSecretAccessKey"></a>

```python
raw_secret_access_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.internalValue"></a>

```python
internal_value: KmsCustomKeyStoreXksProxyAuthenticationCredential
```

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a>

---



