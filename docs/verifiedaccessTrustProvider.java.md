# `verifiedaccessTrustProvider` Submodule <a name="`verifiedaccessTrustProvider` Submodule" id="@cdktf/provider-aws.verifiedaccessTrustProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedaccessTrustProvider <a name="VerifiedaccessTrustProvider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider aws_verifiedaccess_trust_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedaccess_trust_provider.VerifiedaccessTrustProvider;

VerifiedaccessTrustProvider.Builder.create(Construct scope, java.lang.String id)
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
    .policyReferenceName(java.lang.String)
    .trustProviderType(java.lang.String)
//  .description(java.lang.String)
//  .deviceOptions(VerifiedaccessTrustProviderDeviceOptions)
//  .deviceTrustProviderType(java.lang.String)
//  .id(java.lang.String)
//  .oidcOptions(VerifiedaccessTrustProviderOidcOptions)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VerifiedaccessTrustProviderTimeouts)
//  .userTrustProviderType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.policyReferenceName">policyReferenceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#policy_reference_name VerifiedaccessTrustProvider#policy_reference_name}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.trustProviderType">trustProviderType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#trust_provider_type VerifiedaccessTrustProvider#trust_provider_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#description VerifiedaccessTrustProvider#description}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.deviceOptions">deviceOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a></code> | device_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.deviceTrustProviderType">deviceTrustProviderType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#device_trust_provider_type VerifiedaccessTrustProvider#device_trust_provider_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#id VerifiedaccessTrustProvider#id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.oidcOptions">oidcOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a></code> | oidc_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#tags VerifiedaccessTrustProvider#tags}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#tags_all VerifiedaccessTrustProvider#tags_all}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.userTrustProviderType">userTrustProviderType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#user_trust_provider_type VerifiedaccessTrustProvider#user_trust_provider_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `policyReferenceName`<sup>Required</sup> <a name="policyReferenceName" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.policyReferenceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#policy_reference_name VerifiedaccessTrustProvider#policy_reference_name}.

---

##### `trustProviderType`<sup>Required</sup> <a name="trustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.trustProviderType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#trust_provider_type VerifiedaccessTrustProvider#trust_provider_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#description VerifiedaccessTrustProvider#description}.

---

##### `deviceOptions`<sup>Optional</sup> <a name="deviceOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.deviceOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a>

device_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#device_options VerifiedaccessTrustProvider#device_options}

---

##### `deviceTrustProviderType`<sup>Optional</sup> <a name="deviceTrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.deviceTrustProviderType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#device_trust_provider_type VerifiedaccessTrustProvider#device_trust_provider_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#id VerifiedaccessTrustProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oidcOptions`<sup>Optional</sup> <a name="oidcOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.oidcOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a>

oidc_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#oidc_options VerifiedaccessTrustProvider#oidc_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#tags VerifiedaccessTrustProvider#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#tags_all VerifiedaccessTrustProvider#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#timeouts VerifiedaccessTrustProvider#timeouts}

---

##### `userTrustProviderType`<sup>Optional</sup> <a name="userTrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.Initializer.parameter.userTrustProviderType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#user_trust_provider_type VerifiedaccessTrustProvider#user_trust_provider_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putDeviceOptions">putDeviceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putOidcOptions">putOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDeviceOptions">resetDeviceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDeviceTrustProviderType">resetDeviceTrustProviderType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetOidcOptions">resetOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetUserTrustProviderType">resetUserTrustProviderType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeviceOptions` <a name="putDeviceOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putDeviceOptions"></a>

```java
public void putDeviceOptions(VerifiedaccessTrustProviderDeviceOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putDeviceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a>

---

##### `putOidcOptions` <a name="putOidcOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putOidcOptions"></a>

```java
public void putOidcOptions(VerifiedaccessTrustProviderOidcOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putOidcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putTimeouts"></a>

```java
public void putTimeouts(VerifiedaccessTrustProviderTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDeviceOptions` <a name="resetDeviceOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDeviceOptions"></a>

```java
public void resetDeviceOptions()
```

##### `resetDeviceTrustProviderType` <a name="resetDeviceTrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetDeviceTrustProviderType"></a>

```java
public void resetDeviceTrustProviderType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetId"></a>

```java
public void resetId()
```

##### `resetOidcOptions` <a name="resetOidcOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetOidcOptions"></a>

```java
public void resetOidcOptions()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserTrustProviderType` <a name="resetUserTrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.resetUserTrustProviderType"></a>

```java
public void resetUserTrustProviderType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VerifiedaccessTrustProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedaccess_trust_provider.VerifiedaccessTrustProvider;

VerifiedaccessTrustProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedaccess_trust_provider.VerifiedaccessTrustProvider;

VerifiedaccessTrustProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedaccess_trust_provider.VerifiedaccessTrustProvider;

VerifiedaccessTrustProvider.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedaccess_trust_provider.VerifiedaccessTrustProvider;

VerifiedaccessTrustProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VerifiedaccessTrustProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VerifiedaccessTrustProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VerifiedaccessTrustProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VerifiedaccessTrustProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VerifiedaccessTrustProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceOptions">deviceOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference">VerifiedaccessTrustProviderDeviceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.oidcOptions">oidcOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference">VerifiedaccessTrustProviderOidcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference">VerifiedaccessTrustProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceOptionsInput">deviceOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceTrustProviderTypeInput">deviceTrustProviderTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.oidcOptionsInput">oidcOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.policyReferenceNameInput">policyReferenceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.trustProviderTypeInput">trustProviderTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.userTrustProviderTypeInput">userTrustProviderTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceTrustProviderType">deviceTrustProviderType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.policyReferenceName">policyReferenceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.trustProviderType">trustProviderType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.userTrustProviderType">userTrustProviderType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deviceOptions`<sup>Required</sup> <a name="deviceOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceOptions"></a>

```java
public VerifiedaccessTrustProviderDeviceOptionsOutputReference getDeviceOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference">VerifiedaccessTrustProviderDeviceOptionsOutputReference</a>

---

##### `oidcOptions`<sup>Required</sup> <a name="oidcOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.oidcOptions"></a>

```java
public VerifiedaccessTrustProviderOidcOptionsOutputReference getOidcOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference">VerifiedaccessTrustProviderOidcOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.timeouts"></a>

```java
public VerifiedaccessTrustProviderTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference">VerifiedaccessTrustProviderTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `deviceOptionsInput`<sup>Optional</sup> <a name="deviceOptionsInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceOptionsInput"></a>

```java
public VerifiedaccessTrustProviderDeviceOptions getDeviceOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a>

---

##### `deviceTrustProviderTypeInput`<sup>Optional</sup> <a name="deviceTrustProviderTypeInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceTrustProviderTypeInput"></a>

```java
public java.lang.String getDeviceTrustProviderTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `oidcOptionsInput`<sup>Optional</sup> <a name="oidcOptionsInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.oidcOptionsInput"></a>

```java
public VerifiedaccessTrustProviderOidcOptions getOidcOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a>

---

##### `policyReferenceNameInput`<sup>Optional</sup> <a name="policyReferenceNameInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.policyReferenceNameInput"></a>

```java
public java.lang.String getPolicyReferenceNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a>

---

##### `trustProviderTypeInput`<sup>Optional</sup> <a name="trustProviderTypeInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.trustProviderTypeInput"></a>

```java
public java.lang.String getTrustProviderTypeInput();
```

- *Type:* java.lang.String

---

##### `userTrustProviderTypeInput`<sup>Optional</sup> <a name="userTrustProviderTypeInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.userTrustProviderTypeInput"></a>

```java
public java.lang.String getUserTrustProviderTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `deviceTrustProviderType`<sup>Required</sup> <a name="deviceTrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.deviceTrustProviderType"></a>

```java
public java.lang.String getDeviceTrustProviderType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policyReferenceName`<sup>Required</sup> <a name="policyReferenceName" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.policyReferenceName"></a>

```java
public java.lang.String getPolicyReferenceName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `trustProviderType`<sup>Required</sup> <a name="trustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.trustProviderType"></a>

```java
public java.lang.String getTrustProviderType();
```

- *Type:* java.lang.String

---

##### `userTrustProviderType`<sup>Required</sup> <a name="userTrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.userTrustProviderType"></a>

```java
public java.lang.String getUserTrustProviderType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedaccessTrustProviderConfig <a name="VerifiedaccessTrustProviderConfig" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedaccess_trust_provider.VerifiedaccessTrustProviderConfig;

VerifiedaccessTrustProviderConfig.builder()
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
    .policyReferenceName(java.lang.String)
    .trustProviderType(java.lang.String)
//  .description(java.lang.String)
//  .deviceOptions(VerifiedaccessTrustProviderDeviceOptions)
//  .deviceTrustProviderType(java.lang.String)
//  .id(java.lang.String)
//  .oidcOptions(VerifiedaccessTrustProviderOidcOptions)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VerifiedaccessTrustProviderTimeouts)
//  .userTrustProviderType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.policyReferenceName">policyReferenceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#policy_reference_name VerifiedaccessTrustProvider#policy_reference_name}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.trustProviderType">trustProviderType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#trust_provider_type VerifiedaccessTrustProvider#trust_provider_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#description VerifiedaccessTrustProvider#description}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.deviceOptions">deviceOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a></code> | device_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.deviceTrustProviderType">deviceTrustProviderType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#device_trust_provider_type VerifiedaccessTrustProvider#device_trust_provider_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#id VerifiedaccessTrustProvider#id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.oidcOptions">oidcOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a></code> | oidc_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#tags VerifiedaccessTrustProvider#tags}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#tags_all VerifiedaccessTrustProvider#tags_all}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.userTrustProviderType">userTrustProviderType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#user_trust_provider_type VerifiedaccessTrustProvider#user_trust_provider_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `policyReferenceName`<sup>Required</sup> <a name="policyReferenceName" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.policyReferenceName"></a>

```java
public java.lang.String getPolicyReferenceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#policy_reference_name VerifiedaccessTrustProvider#policy_reference_name}.

---

##### `trustProviderType`<sup>Required</sup> <a name="trustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.trustProviderType"></a>

```java
public java.lang.String getTrustProviderType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#trust_provider_type VerifiedaccessTrustProvider#trust_provider_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#description VerifiedaccessTrustProvider#description}.

---

##### `deviceOptions`<sup>Optional</sup> <a name="deviceOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.deviceOptions"></a>

```java
public VerifiedaccessTrustProviderDeviceOptions getDeviceOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a>

device_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#device_options VerifiedaccessTrustProvider#device_options}

---

##### `deviceTrustProviderType`<sup>Optional</sup> <a name="deviceTrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.deviceTrustProviderType"></a>

```java
public java.lang.String getDeviceTrustProviderType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#device_trust_provider_type VerifiedaccessTrustProvider#device_trust_provider_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#id VerifiedaccessTrustProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oidcOptions`<sup>Optional</sup> <a name="oidcOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.oidcOptions"></a>

```java
public VerifiedaccessTrustProviderOidcOptions getOidcOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a>

oidc_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#oidc_options VerifiedaccessTrustProvider#oidc_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#tags VerifiedaccessTrustProvider#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#tags_all VerifiedaccessTrustProvider#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.timeouts"></a>

```java
public VerifiedaccessTrustProviderTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#timeouts VerifiedaccessTrustProvider#timeouts}

---

##### `userTrustProviderType`<sup>Optional</sup> <a name="userTrustProviderType" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderConfig.property.userTrustProviderType"></a>

```java
public java.lang.String getUserTrustProviderType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#user_trust_provider_type VerifiedaccessTrustProvider#user_trust_provider_type}.

---

### VerifiedaccessTrustProviderDeviceOptions <a name="VerifiedaccessTrustProviderDeviceOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedaccess_trust_provider.VerifiedaccessTrustProviderDeviceOptions;

VerifiedaccessTrustProviderDeviceOptions.builder()
//  .tenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#tenant_id VerifiedaccessTrustProvider#tenant_id}. |

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#tenant_id VerifiedaccessTrustProvider#tenant_id}.

---

### VerifiedaccessTrustProviderOidcOptions <a name="VerifiedaccessTrustProviderOidcOptions" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedaccess_trust_provider.VerifiedaccessTrustProviderOidcOptions;

VerifiedaccessTrustProviderOidcOptions.builder()
    .clientSecret(java.lang.String)
//  .authorizationEndpoint(java.lang.String)
//  .clientId(java.lang.String)
//  .issuer(java.lang.String)
//  .scope(java.lang.String)
//  .tokenEndpoint(java.lang.String)
//  .userInfoEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#client_secret VerifiedaccessTrustProvider#client_secret}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#authorization_endpoint VerifiedaccessTrustProvider#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#client_id VerifiedaccessTrustProvider#client_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#issuer VerifiedaccessTrustProvider#issuer}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#scope VerifiedaccessTrustProvider#scope}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#token_endpoint VerifiedaccessTrustProvider#token_endpoint}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#user_info_endpoint VerifiedaccessTrustProvider#user_info_endpoint}. |

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#client_secret VerifiedaccessTrustProvider#client_secret}.

---

##### `authorizationEndpoint`<sup>Optional</sup> <a name="authorizationEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#authorization_endpoint VerifiedaccessTrustProvider#authorization_endpoint}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#client_id VerifiedaccessTrustProvider#client_id}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#issuer VerifiedaccessTrustProvider#issuer}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#scope VerifiedaccessTrustProvider#scope}.

---

##### `tokenEndpoint`<sup>Optional</sup> <a name="tokenEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#token_endpoint VerifiedaccessTrustProvider#token_endpoint}.

---

##### `userInfoEndpoint`<sup>Optional</sup> <a name="userInfoEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions.property.userInfoEndpoint"></a>

```java
public java.lang.String getUserInfoEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#user_info_endpoint VerifiedaccessTrustProvider#user_info_endpoint}.

---

### VerifiedaccessTrustProviderTimeouts <a name="VerifiedaccessTrustProviderTimeouts" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedaccess_trust_provider.VerifiedaccessTrustProviderTimeouts;

VerifiedaccessTrustProviderTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#create VerifiedaccessTrustProvider#create}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#delete VerifiedaccessTrustProvider#delete}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#update VerifiedaccessTrustProvider#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#create VerifiedaccessTrustProvider#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#delete VerifiedaccessTrustProvider#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/verifiedaccess_trust_provider#update VerifiedaccessTrustProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedaccessTrustProviderDeviceOptionsOutputReference <a name="VerifiedaccessTrustProviderDeviceOptionsOutputReference" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedaccess_trust_provider.VerifiedaccessTrustProviderDeviceOptionsOutputReference;

new VerifiedaccessTrustProviderDeviceOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.resetTenantId"></a>

```java
public void resetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptionsOutputReference.property.internalValue"></a>

```java
public VerifiedaccessTrustProviderDeviceOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderDeviceOptions">VerifiedaccessTrustProviderDeviceOptions</a>

---


### VerifiedaccessTrustProviderOidcOptionsOutputReference <a name="VerifiedaccessTrustProviderOidcOptionsOutputReference" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedaccess_trust_provider.VerifiedaccessTrustProviderOidcOptionsOutputReference;

new VerifiedaccessTrustProviderOidcOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetAuthorizationEndpoint">resetAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetTokenEndpoint">resetTokenEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetUserInfoEndpoint">resetUserInfoEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationEndpoint` <a name="resetAuthorizationEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetAuthorizationEndpoint"></a>

```java
public void resetAuthorizationEndpoint()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetIssuer"></a>

```java
public void resetIssuer()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetScope"></a>

```java
public void resetScope()
```

##### `resetTokenEndpoint` <a name="resetTokenEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetTokenEndpoint"></a>

```java
public void resetTokenEndpoint()
```

##### `resetUserInfoEndpoint` <a name="resetUserInfoEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.resetUserInfoEndpoint"></a>

```java
public void resetUserInfoEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpointInput">userInfoEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpointInput"></a>

```java
public java.lang.String getAuthorizationEndpointInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.tokenEndpointInput"></a>

```java
public java.lang.String getTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `userInfoEndpointInput`<sup>Optional</sup> <a name="userInfoEndpointInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpointInput"></a>

```java
public java.lang.String getUserInfoEndpointInput();
```

- *Type:* java.lang.String

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `userInfoEndpoint`<sup>Required</sup> <a name="userInfoEndpoint" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpoint"></a>

```java
public java.lang.String getUserInfoEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptionsOutputReference.property.internalValue"></a>

```java
public VerifiedaccessTrustProviderOidcOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderOidcOptions">VerifiedaccessTrustProviderOidcOptions</a>

---


### VerifiedaccessTrustProviderTimeoutsOutputReference <a name="VerifiedaccessTrustProviderTimeoutsOutputReference" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedaccess_trust_provider.VerifiedaccessTrustProviderTimeoutsOutputReference;

new VerifiedaccessTrustProviderTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.verifiedaccessTrustProvider.VerifiedaccessTrustProviderTimeouts">VerifiedaccessTrustProviderTimeouts</a>

---



