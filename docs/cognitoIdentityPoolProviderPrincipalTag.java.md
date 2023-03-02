# `cognitoIdentityPoolProviderPrincipalTag` Submodule <a name="`cognitoIdentityPoolProviderPrincipalTag` Submodule" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoIdentityPoolProviderPrincipalTag <a name="CognitoIdentityPoolProviderPrincipalTag" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag aws_cognito_identity_pool_provider_principal_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool_provider_principal_tag.CognitoIdentityPoolProviderPrincipalTag;

CognitoIdentityPoolProviderPrincipalTag.Builder.create(Construct scope, java.lang.String id)
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
    .identityPoolId(java.lang.String)
    .identityProviderName(java.lang.String)
//  .id(java.lang.String)
//  .principalTags(java.util.Map<java.lang.String, java.lang.String>)
//  .useDefaults(java.lang.Boolean)
//  .useDefaults(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_pool_id CognitoIdentityPoolProviderPrincipalTag#identity_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.identityProviderName">identityProviderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_provider_name CognitoIdentityPoolProviderPrincipalTag#identity_provider_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#id CognitoIdentityPoolProviderPrincipalTag#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.principalTags">principalTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#principal_tags CognitoIdentityPoolProviderPrincipalTag#principal_tags}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.useDefaults">useDefaults</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#use_defaults CognitoIdentityPoolProviderPrincipalTag#use_defaults}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.identityPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_pool_id CognitoIdentityPoolProviderPrincipalTag#identity_pool_id}.

---

##### `identityProviderName`<sup>Required</sup> <a name="identityProviderName" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.identityProviderName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_provider_name CognitoIdentityPoolProviderPrincipalTag#identity_provider_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#id CognitoIdentityPoolProviderPrincipalTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalTags`<sup>Optional</sup> <a name="principalTags" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.principalTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#principal_tags CognitoIdentityPoolProviderPrincipalTag#principal_tags}.

---

##### `useDefaults`<sup>Optional</sup> <a name="useDefaults" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.Initializer.parameter.useDefaults"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#use_defaults CognitoIdentityPoolProviderPrincipalTag#use_defaults}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetPrincipalTags">resetPrincipalTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetUseDefaults">resetUseDefaults</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetId"></a>

```java
public void resetId()
```

##### `resetPrincipalTags` <a name="resetPrincipalTags" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetPrincipalTags"></a>

```java
public void resetPrincipalTags()
```

##### `resetUseDefaults` <a name="resetUseDefaults" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.resetUseDefaults"></a>

```java
public void resetUseDefaults()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool_provider_principal_tag.CognitoIdentityPoolProviderPrincipalTag;

CognitoIdentityPoolProviderPrincipalTag.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool_provider_principal_tag.CognitoIdentityPoolProviderPrincipalTag;

CognitoIdentityPoolProviderPrincipalTag.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool_provider_principal_tag.CognitoIdentityPoolProviderPrincipalTag;

CognitoIdentityPoolProviderPrincipalTag.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityPoolIdInput">identityPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityProviderNameInput">identityProviderNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.principalTagsInput">principalTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.useDefaultsInput">useDefaultsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityProviderName">identityProviderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.principalTags">principalTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.useDefaults">useDefaults</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identityPoolIdInput`<sup>Optional</sup> <a name="identityPoolIdInput" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityPoolIdInput"></a>

```java
public java.lang.String getIdentityPoolIdInput();
```

- *Type:* java.lang.String

---

##### `identityProviderNameInput`<sup>Optional</sup> <a name="identityProviderNameInput" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityProviderNameInput"></a>

```java
public java.lang.String getIdentityProviderNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `principalTagsInput`<sup>Optional</sup> <a name="principalTagsInput" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.principalTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPrincipalTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useDefaultsInput`<sup>Optional</sup> <a name="useDefaultsInput" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.useDefaultsInput"></a>

```java
public java.lang.Object getUseDefaultsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityPoolId"></a>

```java
public java.lang.String getIdentityPoolId();
```

- *Type:* java.lang.String

---

##### `identityProviderName`<sup>Required</sup> <a name="identityProviderName" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.identityProviderName"></a>

```java
public java.lang.String getIdentityProviderName();
```

- *Type:* java.lang.String

---

##### `principalTags`<sup>Required</sup> <a name="principalTags" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.principalTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPrincipalTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useDefaults`<sup>Required</sup> <a name="useDefaults" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.useDefaults"></a>

```java
public java.lang.Object getUseDefaults();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTag.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoIdentityPoolProviderPrincipalTagConfig <a name="CognitoIdentityPoolProviderPrincipalTagConfig" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_identity_pool_provider_principal_tag.CognitoIdentityPoolProviderPrincipalTagConfig;

CognitoIdentityPoolProviderPrincipalTagConfig.builder()
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
    .identityPoolId(java.lang.String)
    .identityProviderName(java.lang.String)
//  .id(java.lang.String)
//  .principalTags(java.util.Map<java.lang.String, java.lang.String>)
//  .useDefaults(java.lang.Boolean)
//  .useDefaults(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_pool_id CognitoIdentityPoolProviderPrincipalTag#identity_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.identityProviderName">identityProviderName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_provider_name CognitoIdentityPoolProviderPrincipalTag#identity_provider_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#id CognitoIdentityPoolProviderPrincipalTag#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.principalTags">principalTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#principal_tags CognitoIdentityPoolProviderPrincipalTag#principal_tags}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.useDefaults">useDefaults</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#use_defaults CognitoIdentityPoolProviderPrincipalTag#use_defaults}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.identityPoolId"></a>

```java
public java.lang.String getIdentityPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_pool_id CognitoIdentityPoolProviderPrincipalTag#identity_pool_id}.

---

##### `identityProviderName`<sup>Required</sup> <a name="identityProviderName" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.identityProviderName"></a>

```java
public java.lang.String getIdentityProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_provider_name CognitoIdentityPoolProviderPrincipalTag#identity_provider_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#id CognitoIdentityPoolProviderPrincipalTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalTags`<sup>Optional</sup> <a name="principalTags" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.principalTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPrincipalTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#principal_tags CognitoIdentityPoolProviderPrincipalTag#principal_tags}.

---

##### `useDefaults`<sup>Optional</sup> <a name="useDefaults" id="@cdktf/provider-aws.cognitoIdentityPoolProviderPrincipalTag.CognitoIdentityPoolProviderPrincipalTagConfig.property.useDefaults"></a>

```java
public java.lang.Object getUseDefaults();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#use_defaults CognitoIdentityPoolProviderPrincipalTag#use_defaults}.

---



