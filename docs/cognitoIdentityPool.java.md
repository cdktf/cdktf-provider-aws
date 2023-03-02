# `cognitoIdentityPool` Submodule <a name="`cognitoIdentityPool` Submodule" id="@cdktf/provider-aws.cognitoIdentityPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoIdentityPool <a name="CognitoIdentityPool" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool aws_cognito_identity_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool.CognitoIdentityPool;

CognitoIdentityPool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .identityPoolName(java.lang.String)
//  .allowClassicFlow(java.lang.Boolean)
//  .allowClassicFlow(IResolvable)
//  .allowUnauthenticatedIdentities(java.lang.Boolean)
//  .allowUnauthenticatedIdentities(IResolvable)
//  .cognitoIdentityProviders(IResolvable)
//  .cognitoIdentityProviders(java.util.List<CognitoIdentityPoolCognitoIdentityProviders>)
//  .developerProviderName(java.lang.String)
//  .id(java.lang.String)
//  .openidConnectProviderArns(java.util.List<java.lang.String>)
//  .samlProviderArns(java.util.List<java.lang.String>)
//  .supportedLoginProviders(java.util.Map<java.lang.String, java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.identityPoolName">identityPoolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.allowClassicFlow">allowClassicFlow</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.allowUnauthenticatedIdentities">allowUnauthenticatedIdentities</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.cognitoIdentityProviders">cognitoIdentityProviders</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>></code> | cognito_identity_providers block. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.developerProviderName">developerProviderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#id CognitoIdentityPool#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.openidConnectProviderArns">openidConnectProviderArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#openid_connect_provider_arns CognitoIdentityPool#openid_connect_provider_arns}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.samlProviderArns">samlProviderArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#saml_provider_arns CognitoIdentityPool#saml_provider_arns}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.supportedLoginProviders">supportedLoginProviders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags CognitoIdentityPool#tags}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags_all CognitoIdentityPool#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identityPoolName`<sup>Required</sup> <a name="identityPoolName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.identityPoolName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}.

---

##### `allowClassicFlow`<sup>Optional</sup> <a name="allowClassicFlow" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.allowClassicFlow"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}.

---

##### `allowUnauthenticatedIdentities`<sup>Optional</sup> <a name="allowUnauthenticatedIdentities" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.allowUnauthenticatedIdentities"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}.

---

##### `cognitoIdentityProviders`<sup>Optional</sup> <a name="cognitoIdentityProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.cognitoIdentityProviders"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>>

cognito_identity_providers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#cognito_identity_providers CognitoIdentityPool#cognito_identity_providers}

---

##### `developerProviderName`<sup>Optional</sup> <a name="developerProviderName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.developerProviderName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#id CognitoIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `openidConnectProviderArns`<sup>Optional</sup> <a name="openidConnectProviderArns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.openidConnectProviderArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#openid_connect_provider_arns CognitoIdentityPool#openid_connect_provider_arns}.

---

##### `samlProviderArns`<sup>Optional</sup> <a name="samlProviderArns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.samlProviderArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#saml_provider_arns CognitoIdentityPool#saml_provider_arns}.

---

##### `supportedLoginProviders`<sup>Optional</sup> <a name="supportedLoginProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.supportedLoginProviders"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags CognitoIdentityPool#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags_all CognitoIdentityPool#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.putCognitoIdentityProviders">putCognitoIdentityProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetAllowClassicFlow">resetAllowClassicFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetAllowUnauthenticatedIdentities">resetAllowUnauthenticatedIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetCognitoIdentityProviders">resetCognitoIdentityProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetDeveloperProviderName">resetDeveloperProviderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetOpenidConnectProviderArns">resetOpenidConnectProviderArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetSamlProviderArns">resetSamlProviderArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetSupportedLoginProviders">resetSupportedLoginProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCognitoIdentityProviders` <a name="putCognitoIdentityProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.putCognitoIdentityProviders"></a>

```java
public void putCognitoIdentityProviders(IResolvable OR java.util.List<CognitoIdentityPoolCognitoIdentityProviders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.putCognitoIdentityProviders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>>

---

##### `resetAllowClassicFlow` <a name="resetAllowClassicFlow" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetAllowClassicFlow"></a>

```java
public void resetAllowClassicFlow()
```

##### `resetAllowUnauthenticatedIdentities` <a name="resetAllowUnauthenticatedIdentities" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetAllowUnauthenticatedIdentities"></a>

```java
public void resetAllowUnauthenticatedIdentities()
```

##### `resetCognitoIdentityProviders` <a name="resetCognitoIdentityProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetCognitoIdentityProviders"></a>

```java
public void resetCognitoIdentityProviders()
```

##### `resetDeveloperProviderName` <a name="resetDeveloperProviderName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetDeveloperProviderName"></a>

```java
public void resetDeveloperProviderName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetId"></a>

```java
public void resetId()
```

##### `resetOpenidConnectProviderArns` <a name="resetOpenidConnectProviderArns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetOpenidConnectProviderArns"></a>

```java
public void resetOpenidConnectProviderArns()
```

##### `resetSamlProviderArns` <a name="resetSamlProviderArns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetSamlProviderArns"></a>

```java
public void resetSamlProviderArns()
```

##### `resetSupportedLoginProviders` <a name="resetSupportedLoginProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetSupportedLoginProviders"></a>

```java
public void resetSupportedLoginProviders()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool.CognitoIdentityPool;

CognitoIdentityPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool.CognitoIdentityPool;

CognitoIdentityPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool.CognitoIdentityPool;

CognitoIdentityPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProviders">cognitoIdentityProviders</a></code> | <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList">CognitoIdentityPoolCognitoIdentityProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlowInput">allowClassicFlowInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentitiesInput">allowUnauthenticatedIdentitiesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProvidersInput">cognitoIdentityProvidersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderNameInput">developerProviderNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolNameInput">identityPoolNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.openidConnectProviderArnsInput">openidConnectProviderArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArnsInput">samlProviderArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProvidersInput">supportedLoginProvidersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlow">allowClassicFlow</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentities">allowUnauthenticatedIdentities</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderName">developerProviderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolName">identityPoolName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.openidConnectProviderArns">openidConnectProviderArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArns">samlProviderArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProviders">supportedLoginProviders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `cognitoIdentityProviders`<sup>Required</sup> <a name="cognitoIdentityProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProviders"></a>

```java
public CognitoIdentityPoolCognitoIdentityProvidersList getCognitoIdentityProviders();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList">CognitoIdentityPoolCognitoIdentityProvidersList</a>

---

##### `allowClassicFlowInput`<sup>Optional</sup> <a name="allowClassicFlowInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlowInput"></a>

```java
public java.lang.Object getAllowClassicFlowInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowUnauthenticatedIdentitiesInput`<sup>Optional</sup> <a name="allowUnauthenticatedIdentitiesInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentitiesInput"></a>

```java
public java.lang.Object getAllowUnauthenticatedIdentitiesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cognitoIdentityProvidersInput`<sup>Optional</sup> <a name="cognitoIdentityProvidersInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProvidersInput"></a>

```java
public java.lang.Object getCognitoIdentityProvidersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>>

---

##### `developerProviderNameInput`<sup>Optional</sup> <a name="developerProviderNameInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderNameInput"></a>

```java
public java.lang.String getDeveloperProviderNameInput();
```

- *Type:* java.lang.String

---

##### `identityPoolNameInput`<sup>Optional</sup> <a name="identityPoolNameInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolNameInput"></a>

```java
public java.lang.String getIdentityPoolNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `openidConnectProviderArnsInput`<sup>Optional</sup> <a name="openidConnectProviderArnsInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.openidConnectProviderArnsInput"></a>

```java
public java.util.List<java.lang.String> getOpenidConnectProviderArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `samlProviderArnsInput`<sup>Optional</sup> <a name="samlProviderArnsInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArnsInput"></a>

```java
public java.util.List<java.lang.String> getSamlProviderArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedLoginProvidersInput`<sup>Optional</sup> <a name="supportedLoginProvidersInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProvidersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSupportedLoginProvidersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `allowClassicFlow`<sup>Required</sup> <a name="allowClassicFlow" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlow"></a>

```java
public java.lang.Object getAllowClassicFlow();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowUnauthenticatedIdentities`<sup>Required</sup> <a name="allowUnauthenticatedIdentities" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentities"></a>

```java
public java.lang.Object getAllowUnauthenticatedIdentities();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `developerProviderName`<sup>Required</sup> <a name="developerProviderName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderName"></a>

```java
public java.lang.String getDeveloperProviderName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityPoolName`<sup>Required</sup> <a name="identityPoolName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolName"></a>

```java
public java.lang.String getIdentityPoolName();
```

- *Type:* java.lang.String

---

##### `openidConnectProviderArns`<sup>Required</sup> <a name="openidConnectProviderArns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.openidConnectProviderArns"></a>

```java
public java.util.List<java.lang.String> getOpenidConnectProviderArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `samlProviderArns`<sup>Required</sup> <a name="samlProviderArns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArns"></a>

```java
public java.util.List<java.lang.String> getSamlProviderArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedLoginProviders`<sup>Required</sup> <a name="supportedLoginProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProviders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSupportedLoginProviders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoIdentityPoolCognitoIdentityProviders <a name="CognitoIdentityPoolCognitoIdentityProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool.CognitoIdentityPoolCognitoIdentityProviders;

CognitoIdentityPoolCognitoIdentityProviders.builder()
//  .clientId(java.lang.String)
//  .providerName(java.lang.String)
//  .serverSideTokenCheck(java.lang.Boolean)
//  .serverSideTokenCheck(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#client_id CognitoIdentityPool#client_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#provider_name CognitoIdentityPool#provider_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.serverSideTokenCheck">serverSideTokenCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#server_side_token_check CognitoIdentityPool#server_side_token_check}. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#client_id CognitoIdentityPool#client_id}.

---

##### `providerName`<sup>Optional</sup> <a name="providerName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#provider_name CognitoIdentityPool#provider_name}.

---

##### `serverSideTokenCheck`<sup>Optional</sup> <a name="serverSideTokenCheck" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.serverSideTokenCheck"></a>

```java
public java.lang.Object getServerSideTokenCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#server_side_token_check CognitoIdentityPool#server_side_token_check}.

---

### CognitoIdentityPoolConfig <a name="CognitoIdentityPoolConfig" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool.CognitoIdentityPoolConfig;

CognitoIdentityPoolConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .identityPoolName(java.lang.String)
//  .allowClassicFlow(java.lang.Boolean)
//  .allowClassicFlow(IResolvable)
//  .allowUnauthenticatedIdentities(java.lang.Boolean)
//  .allowUnauthenticatedIdentities(IResolvable)
//  .cognitoIdentityProviders(IResolvable)
//  .cognitoIdentityProviders(java.util.List<CognitoIdentityPoolCognitoIdentityProviders>)
//  .developerProviderName(java.lang.String)
//  .id(java.lang.String)
//  .openidConnectProviderArns(java.util.List<java.lang.String>)
//  .samlProviderArns(java.util.List<java.lang.String>)
//  .supportedLoginProviders(java.util.Map<java.lang.String, java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.identityPoolName">identityPoolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowClassicFlow">allowClassicFlow</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowUnauthenticatedIdentities">allowUnauthenticatedIdentities</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoIdentityProviders">cognitoIdentityProviders</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>></code> | cognito_identity_providers block. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.developerProviderName">developerProviderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#id CognitoIdentityPool#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.openidConnectProviderArns">openidConnectProviderArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#openid_connect_provider_arns CognitoIdentityPool#openid_connect_provider_arns}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.samlProviderArns">samlProviderArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#saml_provider_arns CognitoIdentityPool#saml_provider_arns}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.supportedLoginProviders">supportedLoginProviders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags CognitoIdentityPool#tags}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags_all CognitoIdentityPool#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identityPoolName`<sup>Required</sup> <a name="identityPoolName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.identityPoolName"></a>

```java
public java.lang.String getIdentityPoolName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}.

---

##### `allowClassicFlow`<sup>Optional</sup> <a name="allowClassicFlow" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowClassicFlow"></a>

```java
public java.lang.Object getAllowClassicFlow();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}.

---

##### `allowUnauthenticatedIdentities`<sup>Optional</sup> <a name="allowUnauthenticatedIdentities" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowUnauthenticatedIdentities"></a>

```java
public java.lang.Object getAllowUnauthenticatedIdentities();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}.

---

##### `cognitoIdentityProviders`<sup>Optional</sup> <a name="cognitoIdentityProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoIdentityProviders"></a>

```java
public java.lang.Object getCognitoIdentityProviders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>>

cognito_identity_providers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#cognito_identity_providers CognitoIdentityPool#cognito_identity_providers}

---

##### `developerProviderName`<sup>Optional</sup> <a name="developerProviderName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.developerProviderName"></a>

```java
public java.lang.String getDeveloperProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#id CognitoIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `openidConnectProviderArns`<sup>Optional</sup> <a name="openidConnectProviderArns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.openidConnectProviderArns"></a>

```java
public java.util.List<java.lang.String> getOpenidConnectProviderArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#openid_connect_provider_arns CognitoIdentityPool#openid_connect_provider_arns}.

---

##### `samlProviderArns`<sup>Optional</sup> <a name="samlProviderArns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.samlProviderArns"></a>

```java
public java.util.List<java.lang.String> getSamlProviderArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#saml_provider_arns CognitoIdentityPool#saml_provider_arns}.

---

##### `supportedLoginProviders`<sup>Optional</sup> <a name="supportedLoginProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.supportedLoginProviders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSupportedLoginProviders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags CognitoIdentityPool#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags_all CognitoIdentityPool#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoIdentityPoolCognitoIdentityProvidersList <a name="CognitoIdentityPoolCognitoIdentityProvidersList" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool.CognitoIdentityPoolCognitoIdentityProvidersList;

new CognitoIdentityPoolCognitoIdentityProvidersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.get"></a>

```java
public CognitoIdentityPoolCognitoIdentityProvidersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a>>

---


### CognitoIdentityPoolCognitoIdentityProvidersOutputReference <a name="CognitoIdentityPoolCognitoIdentityProvidersOutputReference" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference;

new CognitoIdentityPoolCognitoIdentityProvidersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetProviderName">resetProviderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetServerSideTokenCheck">resetServerSideTokenCheck</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetProviderName` <a name="resetProviderName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetProviderName"></a>

```java
public void resetProviderName()
```

##### `resetServerSideTokenCheck` <a name="resetServerSideTokenCheck" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetServerSideTokenCheck"></a>

```java
public void resetServerSideTokenCheck()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerNameInput">providerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheckInput">serverSideTokenCheckInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck">serverSideTokenCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerNameInput"></a>

```java
public java.lang.String getProviderNameInput();
```

- *Type:* java.lang.String

---

##### `serverSideTokenCheckInput`<sup>Optional</sup> <a name="serverSideTokenCheckInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheckInput"></a>

```java
public java.lang.Object getServerSideTokenCheckInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

##### `serverSideTokenCheck`<sup>Required</sup> <a name="serverSideTokenCheck" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck"></a>

```java
public java.lang.Object getServerSideTokenCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders">CognitoIdentityPoolCognitoIdentityProviders</a> OR com.hashicorp.cdktf.IResolvable

---



