# `kmsCustomKeyStore` Submodule <a name="`kmsCustomKeyStore` Submodule" id="@cdktf/provider-aws.kmsCustomKeyStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsCustomKeyStore <a name="KmsCustomKeyStore" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store aws_kms_custom_key_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kms_custom_key_store.KmsCustomKeyStore;

KmsCustomKeyStore.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .customKeyStoreName(java.lang.String)
//  .cloudHsmClusterId(java.lang.String)
//  .customKeyStoreType(java.lang.String)
//  .id(java.lang.String)
//  .keyStorePassword(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(KmsCustomKeyStoreTimeouts)
//  .trustAnchorCertificate(java.lang.String)
//  .xksProxyAuthenticationCredential(KmsCustomKeyStoreXksProxyAuthenticationCredential)
//  .xksProxyConnectivity(java.lang.String)
//  .xksProxyUriEndpoint(java.lang.String)
//  .xksProxyUriPath(java.lang.String)
//  .xksProxyVpcEndpointServiceName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.customKeyStoreName">customKeyStoreName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#custom_key_store_name KmsCustomKeyStore#custom_key_store_name}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.cloudHsmClusterId">cloudHsmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#cloud_hsm_cluster_id KmsCustomKeyStore#cloud_hsm_cluster_id}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.customKeyStoreType">customKeyStoreType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#custom_key_store_type KmsCustomKeyStore#custom_key_store_type}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#id KmsCustomKeyStore#id}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.keyStorePassword">keyStorePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#key_store_password KmsCustomKeyStore#key_store_password}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.trustAnchorCertificate">trustAnchorCertificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#trust_anchor_certificate KmsCustomKeyStore#trust_anchor_certificate}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.xksProxyAuthenticationCredential">xksProxyAuthenticationCredential</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a></code> | xks_proxy_authentication_credential block. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.xksProxyConnectivity">xksProxyConnectivity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#xks_proxy_connectivity KmsCustomKeyStore#xks_proxy_connectivity}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.xksProxyUriEndpoint">xksProxyUriEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#xks_proxy_uri_endpoint KmsCustomKeyStore#xks_proxy_uri_endpoint}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.xksProxyUriPath">xksProxyUriPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#xks_proxy_uri_path KmsCustomKeyStore#xks_proxy_uri_path}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.xksProxyVpcEndpointServiceName">xksProxyVpcEndpointServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#xks_proxy_vpc_endpoint_service_name KmsCustomKeyStore#xks_proxy_vpc_endpoint_service_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customKeyStoreName`<sup>Required</sup> <a name="customKeyStoreName" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.customKeyStoreName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#custom_key_store_name KmsCustomKeyStore#custom_key_store_name}.

---

##### `cloudHsmClusterId`<sup>Optional</sup> <a name="cloudHsmClusterId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.cloudHsmClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#cloud_hsm_cluster_id KmsCustomKeyStore#cloud_hsm_cluster_id}.

---

##### `customKeyStoreType`<sup>Optional</sup> <a name="customKeyStoreType" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.customKeyStoreType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#custom_key_store_type KmsCustomKeyStore#custom_key_store_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#id KmsCustomKeyStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyStorePassword`<sup>Optional</sup> <a name="keyStorePassword" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.keyStorePassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#key_store_password KmsCustomKeyStore#key_store_password}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#region KmsCustomKeyStore#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#timeouts KmsCustomKeyStore#timeouts}

---

##### `trustAnchorCertificate`<sup>Optional</sup> <a name="trustAnchorCertificate" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.trustAnchorCertificate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#trust_anchor_certificate KmsCustomKeyStore#trust_anchor_certificate}.

---

##### `xksProxyAuthenticationCredential`<sup>Optional</sup> <a name="xksProxyAuthenticationCredential" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.xksProxyAuthenticationCredential"></a>

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a>

xks_proxy_authentication_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#xks_proxy_authentication_credential KmsCustomKeyStore#xks_proxy_authentication_credential}

---

##### `xksProxyConnectivity`<sup>Optional</sup> <a name="xksProxyConnectivity" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.xksProxyConnectivity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#xks_proxy_connectivity KmsCustomKeyStore#xks_proxy_connectivity}.

---

##### `xksProxyUriEndpoint`<sup>Optional</sup> <a name="xksProxyUriEndpoint" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.xksProxyUriEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#xks_proxy_uri_endpoint KmsCustomKeyStore#xks_proxy_uri_endpoint}.

---

##### `xksProxyUriPath`<sup>Optional</sup> <a name="xksProxyUriPath" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.xksProxyUriPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#xks_proxy_uri_path KmsCustomKeyStore#xks_proxy_uri_path}.

---

##### `xksProxyVpcEndpointServiceName`<sup>Optional</sup> <a name="xksProxyVpcEndpointServiceName" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.xksProxyVpcEndpointServiceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#xks_proxy_vpc_endpoint_service_name KmsCustomKeyStore#xks_proxy_vpc_endpoint_service_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putXksProxyAuthenticationCredential">putXksProxyAuthenticationCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetCloudHsmClusterId">resetCloudHsmClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetCustomKeyStoreType">resetCustomKeyStoreType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetKeyStorePassword">resetKeyStorePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetTrustAnchorCertificate">resetTrustAnchorCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyAuthenticationCredential">resetXksProxyAuthenticationCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyConnectivity">resetXksProxyConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyUriEndpoint">resetXksProxyUriEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyUriPath">resetXksProxyUriPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyVpcEndpointServiceName">resetXksProxyVpcEndpointServiceName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putTimeouts"></a>

```java
public void putTimeouts(KmsCustomKeyStoreTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>

---

##### `putXksProxyAuthenticationCredential` <a name="putXksProxyAuthenticationCredential" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putXksProxyAuthenticationCredential"></a>

```java
public void putXksProxyAuthenticationCredential(KmsCustomKeyStoreXksProxyAuthenticationCredential value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putXksProxyAuthenticationCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a>

---

##### `resetCloudHsmClusterId` <a name="resetCloudHsmClusterId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetCloudHsmClusterId"></a>

```java
public void resetCloudHsmClusterId()
```

##### `resetCustomKeyStoreType` <a name="resetCustomKeyStoreType" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetCustomKeyStoreType"></a>

```java
public void resetCustomKeyStoreType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetId"></a>

```java
public void resetId()
```

##### `resetKeyStorePassword` <a name="resetKeyStorePassword" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetKeyStorePassword"></a>

```java
public void resetKeyStorePassword()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTrustAnchorCertificate` <a name="resetTrustAnchorCertificate" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetTrustAnchorCertificate"></a>

```java
public void resetTrustAnchorCertificate()
```

##### `resetXksProxyAuthenticationCredential` <a name="resetXksProxyAuthenticationCredential" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyAuthenticationCredential"></a>

```java
public void resetXksProxyAuthenticationCredential()
```

##### `resetXksProxyConnectivity` <a name="resetXksProxyConnectivity" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyConnectivity"></a>

```java
public void resetXksProxyConnectivity()
```

##### `resetXksProxyUriEndpoint` <a name="resetXksProxyUriEndpoint" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyUriEndpoint"></a>

```java
public void resetXksProxyUriEndpoint()
```

##### `resetXksProxyUriPath` <a name="resetXksProxyUriPath" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyUriPath"></a>

```java
public void resetXksProxyUriPath()
```

##### `resetXksProxyVpcEndpointServiceName` <a name="resetXksProxyVpcEndpointServiceName" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetXksProxyVpcEndpointServiceName"></a>

```java
public void resetXksProxyVpcEndpointServiceName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KmsCustomKeyStore resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.kms_custom_key_store.KmsCustomKeyStore;

KmsCustomKeyStore.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.kms_custom_key_store.KmsCustomKeyStore;

KmsCustomKeyStore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.kms_custom_key_store.KmsCustomKeyStore;

KmsCustomKeyStore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.kms_custom_key_store.KmsCustomKeyStore;

KmsCustomKeyStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KmsCustomKeyStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KmsCustomKeyStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KmsCustomKeyStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KmsCustomKeyStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KmsCustomKeyStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference">KmsCustomKeyStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyAuthenticationCredential">xksProxyAuthenticationCredential</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference">KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cloudHsmClusterIdInput">cloudHsmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreNameInput">customKeyStoreNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreTypeInput">customKeyStoreTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.keyStorePasswordInput">keyStorePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.trustAnchorCertificateInput">trustAnchorCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyAuthenticationCredentialInput">xksProxyAuthenticationCredentialInput</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyConnectivityInput">xksProxyConnectivityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriEndpointInput">xksProxyUriEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriPathInput">xksProxyUriPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyVpcEndpointServiceNameInput">xksProxyVpcEndpointServiceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cloudHsmClusterId">cloudHsmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreName">customKeyStoreName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreType">customKeyStoreType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.keyStorePassword">keyStorePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.trustAnchorCertificate">trustAnchorCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyConnectivity">xksProxyConnectivity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriEndpoint">xksProxyUriEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriPath">xksProxyUriPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyVpcEndpointServiceName">xksProxyVpcEndpointServiceName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.timeouts"></a>

```java
public KmsCustomKeyStoreTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference">KmsCustomKeyStoreTimeoutsOutputReference</a>

---

##### `xksProxyAuthenticationCredential`<sup>Required</sup> <a name="xksProxyAuthenticationCredential" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyAuthenticationCredential"></a>

```java
public KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference getXksProxyAuthenticationCredential();
```

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference">KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference</a>

---

##### `cloudHsmClusterIdInput`<sup>Optional</sup> <a name="cloudHsmClusterIdInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cloudHsmClusterIdInput"></a>

```java
public java.lang.String getCloudHsmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `customKeyStoreNameInput`<sup>Optional</sup> <a name="customKeyStoreNameInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreNameInput"></a>

```java
public java.lang.String getCustomKeyStoreNameInput();
```

- *Type:* java.lang.String

---

##### `customKeyStoreTypeInput`<sup>Optional</sup> <a name="customKeyStoreTypeInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreTypeInput"></a>

```java
public java.lang.String getCustomKeyStoreTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyStorePasswordInput`<sup>Optional</sup> <a name="keyStorePasswordInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.keyStorePasswordInput"></a>

```java
public java.lang.String getKeyStorePasswordInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>

---

##### `trustAnchorCertificateInput`<sup>Optional</sup> <a name="trustAnchorCertificateInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.trustAnchorCertificateInput"></a>

```java
public java.lang.String getTrustAnchorCertificateInput();
```

- *Type:* java.lang.String

---

##### `xksProxyAuthenticationCredentialInput`<sup>Optional</sup> <a name="xksProxyAuthenticationCredentialInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyAuthenticationCredentialInput"></a>

```java
public KmsCustomKeyStoreXksProxyAuthenticationCredential getXksProxyAuthenticationCredentialInput();
```

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a>

---

##### `xksProxyConnectivityInput`<sup>Optional</sup> <a name="xksProxyConnectivityInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyConnectivityInput"></a>

```java
public java.lang.String getXksProxyConnectivityInput();
```

- *Type:* java.lang.String

---

##### `xksProxyUriEndpointInput`<sup>Optional</sup> <a name="xksProxyUriEndpointInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriEndpointInput"></a>

```java
public java.lang.String getXksProxyUriEndpointInput();
```

- *Type:* java.lang.String

---

##### `xksProxyUriPathInput`<sup>Optional</sup> <a name="xksProxyUriPathInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriPathInput"></a>

```java
public java.lang.String getXksProxyUriPathInput();
```

- *Type:* java.lang.String

---

##### `xksProxyVpcEndpointServiceNameInput`<sup>Optional</sup> <a name="xksProxyVpcEndpointServiceNameInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyVpcEndpointServiceNameInput"></a>

```java
public java.lang.String getXksProxyVpcEndpointServiceNameInput();
```

- *Type:* java.lang.String

---

##### `cloudHsmClusterId`<sup>Required</sup> <a name="cloudHsmClusterId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cloudHsmClusterId"></a>

```java
public java.lang.String getCloudHsmClusterId();
```

- *Type:* java.lang.String

---

##### `customKeyStoreName`<sup>Required</sup> <a name="customKeyStoreName" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreName"></a>

```java
public java.lang.String getCustomKeyStoreName();
```

- *Type:* java.lang.String

---

##### `customKeyStoreType`<sup>Required</sup> <a name="customKeyStoreType" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreType"></a>

```java
public java.lang.String getCustomKeyStoreType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyStorePassword`<sup>Required</sup> <a name="keyStorePassword" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.keyStorePassword"></a>

```java
public java.lang.String getKeyStorePassword();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `trustAnchorCertificate`<sup>Required</sup> <a name="trustAnchorCertificate" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.trustAnchorCertificate"></a>

```java
public java.lang.String getTrustAnchorCertificate();
```

- *Type:* java.lang.String

---

##### `xksProxyConnectivity`<sup>Required</sup> <a name="xksProxyConnectivity" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyConnectivity"></a>

```java
public java.lang.String getXksProxyConnectivity();
```

- *Type:* java.lang.String

---

##### `xksProxyUriEndpoint`<sup>Required</sup> <a name="xksProxyUriEndpoint" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriEndpoint"></a>

```java
public java.lang.String getXksProxyUriEndpoint();
```

- *Type:* java.lang.String

---

##### `xksProxyUriPath`<sup>Required</sup> <a name="xksProxyUriPath" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyUriPath"></a>

```java
public java.lang.String getXksProxyUriPath();
```

- *Type:* java.lang.String

---

##### `xksProxyVpcEndpointServiceName`<sup>Required</sup> <a name="xksProxyVpcEndpointServiceName" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.xksProxyVpcEndpointServiceName"></a>

```java
public java.lang.String getXksProxyVpcEndpointServiceName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KmsCustomKeyStoreConfig <a name="KmsCustomKeyStoreConfig" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kms_custom_key_store.KmsCustomKeyStoreConfig;

KmsCustomKeyStoreConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .customKeyStoreName(java.lang.String)
//  .cloudHsmClusterId(java.lang.String)
//  .customKeyStoreType(java.lang.String)
//  .id(java.lang.String)
//  .keyStorePassword(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(KmsCustomKeyStoreTimeouts)
//  .trustAnchorCertificate(java.lang.String)
//  .xksProxyAuthenticationCredential(KmsCustomKeyStoreXksProxyAuthenticationCredential)
//  .xksProxyConnectivity(java.lang.String)
//  .xksProxyUriEndpoint(java.lang.String)
//  .xksProxyUriPath(java.lang.String)
//  .xksProxyVpcEndpointServiceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.customKeyStoreName">customKeyStoreName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#custom_key_store_name KmsCustomKeyStore#custom_key_store_name}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.cloudHsmClusterId">cloudHsmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#cloud_hsm_cluster_id KmsCustomKeyStore#cloud_hsm_cluster_id}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.customKeyStoreType">customKeyStoreType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#custom_key_store_type KmsCustomKeyStore#custom_key_store_type}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#id KmsCustomKeyStore#id}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.keyStorePassword">keyStorePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#key_store_password KmsCustomKeyStore#key_store_password}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.trustAnchorCertificate">trustAnchorCertificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#trust_anchor_certificate KmsCustomKeyStore#trust_anchor_certificate}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyAuthenticationCredential">xksProxyAuthenticationCredential</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a></code> | xks_proxy_authentication_credential block. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyConnectivity">xksProxyConnectivity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#xks_proxy_connectivity KmsCustomKeyStore#xks_proxy_connectivity}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyUriEndpoint">xksProxyUriEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#xks_proxy_uri_endpoint KmsCustomKeyStore#xks_proxy_uri_endpoint}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyUriPath">xksProxyUriPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#xks_proxy_uri_path KmsCustomKeyStore#xks_proxy_uri_path}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyVpcEndpointServiceName">xksProxyVpcEndpointServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#xks_proxy_vpc_endpoint_service_name KmsCustomKeyStore#xks_proxy_vpc_endpoint_service_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customKeyStoreName`<sup>Required</sup> <a name="customKeyStoreName" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.customKeyStoreName"></a>

```java
public java.lang.String getCustomKeyStoreName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#custom_key_store_name KmsCustomKeyStore#custom_key_store_name}.

---

##### `cloudHsmClusterId`<sup>Optional</sup> <a name="cloudHsmClusterId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.cloudHsmClusterId"></a>

```java
public java.lang.String getCloudHsmClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#cloud_hsm_cluster_id KmsCustomKeyStore#cloud_hsm_cluster_id}.

---

##### `customKeyStoreType`<sup>Optional</sup> <a name="customKeyStoreType" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.customKeyStoreType"></a>

```java
public java.lang.String getCustomKeyStoreType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#custom_key_store_type KmsCustomKeyStore#custom_key_store_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#id KmsCustomKeyStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyStorePassword`<sup>Optional</sup> <a name="keyStorePassword" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.keyStorePassword"></a>

```java
public java.lang.String getKeyStorePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#key_store_password KmsCustomKeyStore#key_store_password}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#region KmsCustomKeyStore#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.timeouts"></a>

```java
public KmsCustomKeyStoreTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#timeouts KmsCustomKeyStore#timeouts}

---

##### `trustAnchorCertificate`<sup>Optional</sup> <a name="trustAnchorCertificate" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.trustAnchorCertificate"></a>

```java
public java.lang.String getTrustAnchorCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#trust_anchor_certificate KmsCustomKeyStore#trust_anchor_certificate}.

---

##### `xksProxyAuthenticationCredential`<sup>Optional</sup> <a name="xksProxyAuthenticationCredential" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyAuthenticationCredential"></a>

```java
public KmsCustomKeyStoreXksProxyAuthenticationCredential getXksProxyAuthenticationCredential();
```

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a>

xks_proxy_authentication_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#xks_proxy_authentication_credential KmsCustomKeyStore#xks_proxy_authentication_credential}

---

##### `xksProxyConnectivity`<sup>Optional</sup> <a name="xksProxyConnectivity" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyConnectivity"></a>

```java
public java.lang.String getXksProxyConnectivity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#xks_proxy_connectivity KmsCustomKeyStore#xks_proxy_connectivity}.

---

##### `xksProxyUriEndpoint`<sup>Optional</sup> <a name="xksProxyUriEndpoint" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyUriEndpoint"></a>

```java
public java.lang.String getXksProxyUriEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#xks_proxy_uri_endpoint KmsCustomKeyStore#xks_proxy_uri_endpoint}.

---

##### `xksProxyUriPath`<sup>Optional</sup> <a name="xksProxyUriPath" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyUriPath"></a>

```java
public java.lang.String getXksProxyUriPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#xks_proxy_uri_path KmsCustomKeyStore#xks_proxy_uri_path}.

---

##### `xksProxyVpcEndpointServiceName`<sup>Optional</sup> <a name="xksProxyVpcEndpointServiceName" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.xksProxyVpcEndpointServiceName"></a>

```java
public java.lang.String getXksProxyVpcEndpointServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#xks_proxy_vpc_endpoint_service_name KmsCustomKeyStore#xks_proxy_vpc_endpoint_service_name}.

---

### KmsCustomKeyStoreTimeouts <a name="KmsCustomKeyStoreTimeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kms_custom_key_store.KmsCustomKeyStoreTimeouts;

KmsCustomKeyStoreTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#create KmsCustomKeyStore#create}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#delete KmsCustomKeyStore#delete}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#update KmsCustomKeyStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#create KmsCustomKeyStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#delete KmsCustomKeyStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#update KmsCustomKeyStore#update}.

---

### KmsCustomKeyStoreXksProxyAuthenticationCredential <a name="KmsCustomKeyStoreXksProxyAuthenticationCredential" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kms_custom_key_store.KmsCustomKeyStoreXksProxyAuthenticationCredential;

KmsCustomKeyStoreXksProxyAuthenticationCredential.builder()
    .accessKeyId(java.lang.String)
    .rawSecretAccessKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#access_key_id KmsCustomKeyStore#access_key_id}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential.property.rawSecretAccessKey">rawSecretAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#raw_secret_access_key KmsCustomKeyStore#raw_secret_access_key}. |

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#access_key_id KmsCustomKeyStore#access_key_id}.

---

##### `rawSecretAccessKey`<sup>Required</sup> <a name="rawSecretAccessKey" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential.property.rawSecretAccessKey"></a>

```java
public java.lang.String getRawSecretAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/kms_custom_key_store#raw_secret_access_key KmsCustomKeyStore#raw_secret_access_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsCustomKeyStoreTimeoutsOutputReference <a name="KmsCustomKeyStoreTimeoutsOutputReference" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kms_custom_key_store.KmsCustomKeyStoreTimeoutsOutputReference;

new KmsCustomKeyStoreTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>

---


### KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference <a name="KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kms_custom_key_store.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference;

new KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.rawSecretAccessKeyInput">rawSecretAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.rawSecretAccessKey">rawSecretAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.accessKeyIdInput"></a>

```java
public java.lang.String getAccessKeyIdInput();
```

- *Type:* java.lang.String

---

##### `rawSecretAccessKeyInput`<sup>Optional</sup> <a name="rawSecretAccessKeyInput" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.rawSecretAccessKeyInput"></a>

```java
public java.lang.String getRawSecretAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

---

##### `rawSecretAccessKey`<sup>Required</sup> <a name="rawSecretAccessKey" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.rawSecretAccessKey"></a>

```java
public java.lang.String getRawSecretAccessKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference.property.internalValue"></a>

```java
public KmsCustomKeyStoreXksProxyAuthenticationCredential getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreXksProxyAuthenticationCredential">KmsCustomKeyStoreXksProxyAuthenticationCredential</a>

---



