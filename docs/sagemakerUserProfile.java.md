# `sagemakerUserProfile` Submodule <a name="`sagemakerUserProfile` Submodule" id="@cdktf/provider-aws.sagemakerUserProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerUserProfile <a name="SagemakerUserProfile" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile aws_sagemaker_user_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfile;

SagemakerUserProfile.Builder.create(Construct scope, java.lang.String id)
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
    .domainId(java.lang.String)
    .userProfileName(java.lang.String)
//  .id(java.lang.String)
//  .singleSignOnUserIdentifier(java.lang.String)
//  .singleSignOnUserValue(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .userSettings(SagemakerUserProfileUserSettings)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.domainId">domainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#domain_id SagemakerUserProfile#domain_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.userProfileName">userProfileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#user_profile_name SagemakerUserProfile#user_profile_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#id SagemakerUserProfile#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.singleSignOnUserIdentifier">singleSignOnUserIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#single_sign_on_user_identifier SagemakerUserProfile#single_sign_on_user_identifier}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.singleSignOnUserValue">singleSignOnUserValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#single_sign_on_user_value SagemakerUserProfile#single_sign_on_user_value}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#tags SagemakerUserProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#tags_all SagemakerUserProfile#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.userSettings">userSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a></code> | user_settings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.domainId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#domain_id SagemakerUserProfile#domain_id}.

---

##### `userProfileName`<sup>Required</sup> <a name="userProfileName" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.userProfileName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#user_profile_name SagemakerUserProfile#user_profile_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#id SagemakerUserProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `singleSignOnUserIdentifier`<sup>Optional</sup> <a name="singleSignOnUserIdentifier" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.singleSignOnUserIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#single_sign_on_user_identifier SagemakerUserProfile#single_sign_on_user_identifier}.

---

##### `singleSignOnUserValue`<sup>Optional</sup> <a name="singleSignOnUserValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.singleSignOnUserValue"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#single_sign_on_user_value SagemakerUserProfile#single_sign_on_user_value}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#tags SagemakerUserProfile#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#tags_all SagemakerUserProfile#tags_all}.

---

##### `userSettings`<sup>Optional</sup> <a name="userSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.userSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a>

user_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#user_settings SagemakerUserProfile#user_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.putUserSettings">putUserSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetSingleSignOnUserIdentifier">resetSingleSignOnUserIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetSingleSignOnUserValue">resetSingleSignOnUserValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetUserSettings">resetUserSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putUserSettings` <a name="putUserSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.putUserSettings"></a>

```java
public void putUserSettings(SagemakerUserProfileUserSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.putUserSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetId"></a>

```java
public void resetId()
```

##### `resetSingleSignOnUserIdentifier` <a name="resetSingleSignOnUserIdentifier" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetSingleSignOnUserIdentifier"></a>

```java
public void resetSingleSignOnUserIdentifier()
```

##### `resetSingleSignOnUserValue` <a name="resetSingleSignOnUserValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetSingleSignOnUserValue"></a>

```java
public void resetSingleSignOnUserValue()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetUserSettings` <a name="resetUserSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.resetUserSettings"></a>

```java
public void resetUserSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfile;

SagemakerUserProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfile;

SagemakerUserProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfile;

SagemakerUserProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.homeEfsFileSystemUid">homeEfsFileSystemUid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.userSettings">userSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference">SagemakerUserProfileUserSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.domainIdInput">domainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserIdentifierInput">singleSignOnUserIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserValueInput">singleSignOnUserValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.userProfileNameInput">userProfileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.userSettingsInput">userSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserIdentifier">singleSignOnUserIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserValue">singleSignOnUserValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.userProfileName">userProfileName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `homeEfsFileSystemUid`<sup>Required</sup> <a name="homeEfsFileSystemUid" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.homeEfsFileSystemUid"></a>

```java
public java.lang.String getHomeEfsFileSystemUid();
```

- *Type:* java.lang.String

---

##### `userSettings`<sup>Required</sup> <a name="userSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.userSettings"></a>

```java
public SagemakerUserProfileUserSettingsOutputReference getUserSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference">SagemakerUserProfileUserSettingsOutputReference</a>

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.domainIdInput"></a>

```java
public java.lang.String getDomainIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `singleSignOnUserIdentifierInput`<sup>Optional</sup> <a name="singleSignOnUserIdentifierInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserIdentifierInput"></a>

```java
public java.lang.String getSingleSignOnUserIdentifierInput();
```

- *Type:* java.lang.String

---

##### `singleSignOnUserValueInput`<sup>Optional</sup> <a name="singleSignOnUserValueInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserValueInput"></a>

```java
public java.lang.String getSingleSignOnUserValueInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userProfileNameInput`<sup>Optional</sup> <a name="userProfileNameInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.userProfileNameInput"></a>

```java
public java.lang.String getUserProfileNameInput();
```

- *Type:* java.lang.String

---

##### `userSettingsInput`<sup>Optional</sup> <a name="userSettingsInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.userSettingsInput"></a>

```java
public SagemakerUserProfileUserSettings getUserSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `singleSignOnUserIdentifier`<sup>Required</sup> <a name="singleSignOnUserIdentifier" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserIdentifier"></a>

```java
public java.lang.String getSingleSignOnUserIdentifier();
```

- *Type:* java.lang.String

---

##### `singleSignOnUserValue`<sup>Required</sup> <a name="singleSignOnUserValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserValue"></a>

```java
public java.lang.String getSingleSignOnUserValue();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userProfileName`<sup>Required</sup> <a name="userProfileName" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.userProfileName"></a>

```java
public java.lang.String getUserProfileName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerUserProfileConfig <a name="SagemakerUserProfileConfig" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileConfig;

SagemakerUserProfileConfig.builder()
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
    .domainId(java.lang.String)
    .userProfileName(java.lang.String)
//  .id(java.lang.String)
//  .singleSignOnUserIdentifier(java.lang.String)
//  .singleSignOnUserValue(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .userSettings(SagemakerUserProfileUserSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.domainId">domainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#domain_id SagemakerUserProfile#domain_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.userProfileName">userProfileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#user_profile_name SagemakerUserProfile#user_profile_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#id SagemakerUserProfile#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.singleSignOnUserIdentifier">singleSignOnUserIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#single_sign_on_user_identifier SagemakerUserProfile#single_sign_on_user_identifier}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.singleSignOnUserValue">singleSignOnUserValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#single_sign_on_user_value SagemakerUserProfile#single_sign_on_user_value}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#tags SagemakerUserProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#tags_all SagemakerUserProfile#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.userSettings">userSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a></code> | user_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#domain_id SagemakerUserProfile#domain_id}.

---

##### `userProfileName`<sup>Required</sup> <a name="userProfileName" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.userProfileName"></a>

```java
public java.lang.String getUserProfileName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#user_profile_name SagemakerUserProfile#user_profile_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#id SagemakerUserProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `singleSignOnUserIdentifier`<sup>Optional</sup> <a name="singleSignOnUserIdentifier" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.singleSignOnUserIdentifier"></a>

```java
public java.lang.String getSingleSignOnUserIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#single_sign_on_user_identifier SagemakerUserProfile#single_sign_on_user_identifier}.

---

##### `singleSignOnUserValue`<sup>Optional</sup> <a name="singleSignOnUserValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.singleSignOnUserValue"></a>

```java
public java.lang.String getSingleSignOnUserValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#single_sign_on_user_value SagemakerUserProfile#single_sign_on_user_value}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#tags SagemakerUserProfile#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#tags_all SagemakerUserProfile#tags_all}.

---

##### `userSettings`<sup>Optional</sup> <a name="userSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileConfig.property.userSettings"></a>

```java
public SagemakerUserProfileUserSettings getUserSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a>

user_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#user_settings SagemakerUserProfile#user_settings}

---

### SagemakerUserProfileUserSettings <a name="SagemakerUserProfileUserSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettings;

SagemakerUserProfileUserSettings.builder()
    .executionRole(java.lang.String)
//  .canvasAppSettings(SagemakerUserProfileUserSettingsCanvasAppSettings)
//  .jupyterServerAppSettings(SagemakerUserProfileUserSettingsJupyterServerAppSettings)
//  .kernelGatewayAppSettings(SagemakerUserProfileUserSettingsKernelGatewayAppSettings)
//  .rSessionAppSettings(SagemakerUserProfileUserSettingsRSessionAppSettings)
//  .securityGroups(java.util.List<java.lang.String>)
//  .sharingSettings(SagemakerUserProfileUserSettingsSharingSettings)
//  .tensorBoardAppSettings(SagemakerUserProfileUserSettingsTensorBoardAppSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#execution_role SagemakerUserProfile#execution_role}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.canvasAppSettings">canvasAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings">SagemakerUserProfileUserSettingsCanvasAppSettings</a></code> | canvas_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.jupyterServerAppSettings">jupyterServerAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a></code> | jupyter_server_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.kernelGatewayAppSettings">kernelGatewayAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a></code> | kernel_gateway_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.rSessionAppSettings">rSessionAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings">SagemakerUserProfileUserSettingsRSessionAppSettings</a></code> | r_session_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#security_groups SagemakerUserProfile#security_groups}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.sharingSettings">sharingSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a></code> | sharing_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.tensorBoardAppSettings">tensorBoardAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings">SagemakerUserProfileUserSettingsTensorBoardAppSettings</a></code> | tensor_board_app_settings block. |

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#execution_role SagemakerUserProfile#execution_role}.

---

##### `canvasAppSettings`<sup>Optional</sup> <a name="canvasAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.canvasAppSettings"></a>

```java
public SagemakerUserProfileUserSettingsCanvasAppSettings getCanvasAppSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings">SagemakerUserProfileUserSettingsCanvasAppSettings</a>

canvas_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#canvas_app_settings SagemakerUserProfile#canvas_app_settings}

---

##### `jupyterServerAppSettings`<sup>Optional</sup> <a name="jupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.jupyterServerAppSettings"></a>

```java
public SagemakerUserProfileUserSettingsJupyterServerAppSettings getJupyterServerAppSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a>

jupyter_server_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#jupyter_server_app_settings SagemakerUserProfile#jupyter_server_app_settings}

---

##### `kernelGatewayAppSettings`<sup>Optional</sup> <a name="kernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.kernelGatewayAppSettings"></a>

```java
public SagemakerUserProfileUserSettingsKernelGatewayAppSettings getKernelGatewayAppSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a>

kernel_gateway_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#kernel_gateway_app_settings SagemakerUserProfile#kernel_gateway_app_settings}

---

##### `rSessionAppSettings`<sup>Optional</sup> <a name="rSessionAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.rSessionAppSettings"></a>

```java
public SagemakerUserProfileUserSettingsRSessionAppSettings getRSessionAppSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings">SagemakerUserProfileUserSettingsRSessionAppSettings</a>

r_session_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#r_session_app_settings SagemakerUserProfile#r_session_app_settings}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#security_groups SagemakerUserProfile#security_groups}.

---

##### `sharingSettings`<sup>Optional</sup> <a name="sharingSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.sharingSettings"></a>

```java
public SagemakerUserProfileUserSettingsSharingSettings getSharingSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a>

sharing_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#sharing_settings SagemakerUserProfile#sharing_settings}

---

##### `tensorBoardAppSettings`<sup>Optional</sup> <a name="tensorBoardAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.tensorBoardAppSettings"></a>

```java
public SagemakerUserProfileUserSettingsTensorBoardAppSettings getTensorBoardAppSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings">SagemakerUserProfileUserSettingsTensorBoardAppSettings</a>

tensor_board_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#tensor_board_app_settings SagemakerUserProfile#tensor_board_app_settings}

---

### SagemakerUserProfileUserSettingsCanvasAppSettings <a name="SagemakerUserProfileUserSettingsCanvasAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsCanvasAppSettings;

SagemakerUserProfileUserSettingsCanvasAppSettings.builder()
//  .timeSeriesForecastingSettings(SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings.property.timeSeriesForecastingSettings">timeSeriesForecastingSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a></code> | time_series_forecasting_settings block. |

---

##### `timeSeriesForecastingSettings`<sup>Optional</sup> <a name="timeSeriesForecastingSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings.property.timeSeriesForecastingSettings"></a>

```java
public SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings getTimeSeriesForecastingSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a>

time_series_forecasting_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#time_series_forecasting_settings SagemakerUserProfile#time_series_forecasting_settings}

---

### SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings <a name="SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings;

SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings.builder()
//  .amazonForecastRoleArn(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings.property.amazonForecastRoleArn">amazonForecastRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#amazon_forecast_role_arn SagemakerUserProfile#amazon_forecast_role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#status SagemakerUserProfile#status}. |

---

##### `amazonForecastRoleArn`<sup>Optional</sup> <a name="amazonForecastRoleArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings.property.amazonForecastRoleArn"></a>

```java
public java.lang.String getAmazonForecastRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#amazon_forecast_role_arn SagemakerUserProfile#amazon_forecast_role_arn}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#status SagemakerUserProfile#status}.

---

### SagemakerUserProfileUserSettingsJupyterServerAppSettings <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterServerAppSettings;

SagemakerUserProfileUserSettingsJupyterServerAppSettings.builder()
//  .codeRepository(IResolvable)
//  .codeRepository(java.util.List<SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository>)
//  .defaultResourceSpec(SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec)
//  .lifecycleConfigArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.codeRepository">codeRepository</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository</a>></code> | code_repository block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}. |

---

##### `codeRepository`<sup>Optional</sup> <a name="codeRepository" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.codeRepository"></a>

```java
public java.lang.Object getCodeRepository();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository</a>>

code_repository block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#code_repository SagemakerUserProfile#code_repository}

---

##### `defaultResourceSpec`<sup>Optional</sup> <a name="defaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.defaultResourceSpec"></a>

```java
public SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

##### `lifecycleConfigArns`<sup>Optional</sup> <a name="lifecycleConfigArns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}.

---

### SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository;

SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository.builder()
    .repositoryUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#repository_url SagemakerUserProfile#repository_url}. |

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#repository_url SagemakerUserProfile#repository_url}.

---

### SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec;

SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.builder()
//  .instanceType(java.lang.String)
//  .lifecycleConfigArn(java.lang.String)
//  .sagemakerImageArn(java.lang.String)
//  .sagemakerImageVersionArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageArn">sagemakerImageArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">sagemakerImageVersionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}.

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}.

---

##### `sagemakerImageArn`<sup>Optional</sup> <a name="sagemakerImageArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```java
public java.lang.String getSagemakerImageArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}.

---

##### `sagemakerImageVersionArn`<sup>Optional</sup> <a name="sagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```java
public java.lang.String getSagemakerImageVersionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}.

---

### SagemakerUserProfileUserSettingsKernelGatewayAppSettings <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings;

SagemakerUserProfileUserSettingsKernelGatewayAppSettings.builder()
//  .customImage(IResolvable)
//  .customImage(java.util.List<SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage>)
//  .defaultResourceSpec(SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec)
//  .lifecycleConfigArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.customImage">customImage</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage</a>></code> | custom_image block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}. |

---

##### `customImage`<sup>Optional</sup> <a name="customImage" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.customImage"></a>

```java
public java.lang.Object getCustomImage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage</a>>

custom_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#custom_image SagemakerUserProfile#custom_image}

---

##### `defaultResourceSpec`<sup>Optional</sup> <a name="defaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.defaultResourceSpec"></a>

```java
public SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

##### `lifecycleConfigArns`<sup>Optional</sup> <a name="lifecycleConfigArns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}.

---

### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage;

SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage.builder()
    .appImageConfigName(java.lang.String)
    .imageName(java.lang.String)
//  .imageVersionNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage.property.appImageConfigName">appImageConfigName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage.property.imageName">imageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage.property.imageVersionNumber">imageVersionNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}. |

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage.property.appImageConfigName"></a>

```java
public java.lang.String getAppImageConfigName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}.

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}.

---

##### `imageVersionNumber`<sup>Optional</sup> <a name="imageVersionNumber" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage.property.imageVersionNumber"></a>

```java
public java.lang.Number getImageVersionNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}.

---

### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;

SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.builder()
//  .instanceType(java.lang.String)
//  .lifecycleConfigArn(java.lang.String)
//  .sagemakerImageArn(java.lang.String)
//  .sagemakerImageVersionArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageArn">sagemakerImageArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">sagemakerImageVersionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}.

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}.

---

##### `sagemakerImageArn`<sup>Optional</sup> <a name="sagemakerImageArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```java
public java.lang.String getSagemakerImageArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}.

---

##### `sagemakerImageVersionArn`<sup>Optional</sup> <a name="sagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```java
public java.lang.String getSagemakerImageVersionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}.

---

### SagemakerUserProfileUserSettingsRSessionAppSettings <a name="SagemakerUserProfileUserSettingsRSessionAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsRSessionAppSettings;

SagemakerUserProfileUserSettingsRSessionAppSettings.builder()
//  .customImage(IResolvable)
//  .customImage(java.util.List<SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage>)
//  .defaultResourceSpec(SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings.property.customImage">customImage</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage</a>></code> | custom_image block. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |

---

##### `customImage`<sup>Optional</sup> <a name="customImage" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings.property.customImage"></a>

```java
public java.lang.Object getCustomImage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage</a>>

custom_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#custom_image SagemakerUserProfile#custom_image}

---

##### `defaultResourceSpec`<sup>Optional</sup> <a name="defaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings.property.defaultResourceSpec"></a>

```java
public SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

### SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage <a name="SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage;

SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage.builder()
    .appImageConfigName(java.lang.String)
    .imageName(java.lang.String)
//  .imageVersionNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage.property.appImageConfigName">appImageConfigName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage.property.imageName">imageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage.property.imageVersionNumber">imageVersionNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}. |

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage.property.appImageConfigName"></a>

```java
public java.lang.String getAppImageConfigName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}.

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}.

---

##### `imageVersionNumber`<sup>Optional</sup> <a name="imageVersionNumber" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage.property.imageVersionNumber"></a>

```java
public java.lang.Number getImageVersionNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}.

---

### SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec;

SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec.builder()
//  .instanceType(java.lang.String)
//  .lifecycleConfigArn(java.lang.String)
//  .sagemakerImageArn(java.lang.String)
//  .sagemakerImageVersionArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec.property.sagemakerImageArn">sagemakerImageArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">sagemakerImageVersionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}.

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}.

---

##### `sagemakerImageArn`<sup>Optional</sup> <a name="sagemakerImageArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```java
public java.lang.String getSagemakerImageArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}.

---

##### `sagemakerImageVersionArn`<sup>Optional</sup> <a name="sagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```java
public java.lang.String getSagemakerImageVersionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}.

---

### SagemakerUserProfileUserSettingsSharingSettings <a name="SagemakerUserProfileUserSettingsSharingSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsSharingSettings;

SagemakerUserProfileUserSettingsSharingSettings.builder()
//  .notebookOutputOption(java.lang.String)
//  .s3KmsKeyId(java.lang.String)
//  .s3OutputPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.notebookOutputOption">notebookOutputOption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#notebook_output_option SagemakerUserProfile#notebook_output_option}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.s3KmsKeyId">s3KmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.s3OutputPath">s3OutputPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#s3_output_path SagemakerUserProfile#s3_output_path}. |

---

##### `notebookOutputOption`<sup>Optional</sup> <a name="notebookOutputOption" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.notebookOutputOption"></a>

```java
public java.lang.String getNotebookOutputOption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#notebook_output_option SagemakerUserProfile#notebook_output_option}.

---

##### `s3KmsKeyId`<sup>Optional</sup> <a name="s3KmsKeyId" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.s3KmsKeyId"></a>

```java
public java.lang.String getS3KmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}.

---

##### `s3OutputPath`<sup>Optional</sup> <a name="s3OutputPath" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.s3OutputPath"></a>

```java
public java.lang.String getS3OutputPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#s3_output_path SagemakerUserProfile#s3_output_path}.

---

### SagemakerUserProfileUserSettingsTensorBoardAppSettings <a name="SagemakerUserProfileUserSettingsTensorBoardAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsTensorBoardAppSettings;

SagemakerUserProfileUserSettingsTensorBoardAppSettings.builder()
    .defaultResourceSpec(SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings.property.defaultResourceSpec"></a>

```java
public SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

### SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec;

SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec.builder()
//  .instanceType(java.lang.String)
//  .lifecycleConfigArn(java.lang.String)
//  .sagemakerImageArn(java.lang.String)
//  .sagemakerImageVersionArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.sagemakerImageArn">sagemakerImageArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">sagemakerImageVersionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}.

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}.

---

##### `sagemakerImageArn`<sup>Optional</sup> <a name="sagemakerImageArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```java
public java.lang.String getSagemakerImageArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}.

---

##### `sagemakerImageVersionArn`<sup>Optional</sup> <a name="sagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```java
public java.lang.String getSagemakerImageVersionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference;

new SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putTimeSeriesForecastingSettings">putTimeSeriesForecastingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.resetTimeSeriesForecastingSettings">resetTimeSeriesForecastingSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTimeSeriesForecastingSettings` <a name="putTimeSeriesForecastingSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putTimeSeriesForecastingSettings"></a>

```java
public void putTimeSeriesForecastingSettings(SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.putTimeSeriesForecastingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a>

---

##### `resetTimeSeriesForecastingSettings` <a name="resetTimeSeriesForecastingSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.resetTimeSeriesForecastingSettings"></a>

```java
public void resetTimeSeriesForecastingSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.timeSeriesForecastingSettings">timeSeriesForecastingSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference">SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.timeSeriesForecastingSettingsInput">timeSeriesForecastingSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings">SagemakerUserProfileUserSettingsCanvasAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeSeriesForecastingSettings`<sup>Required</sup> <a name="timeSeriesForecastingSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.timeSeriesForecastingSettings"></a>

```java
public SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference getTimeSeriesForecastingSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference">SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference</a>

---

##### `timeSeriesForecastingSettingsInput`<sup>Optional</sup> <a name="timeSeriesForecastingSettingsInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.timeSeriesForecastingSettingsInput"></a>

```java
public SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings getTimeSeriesForecastingSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference.property.internalValue"></a>

```java
public SagemakerUserProfileUserSettingsCanvasAppSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings">SagemakerUserProfileUserSettingsCanvasAppSettings</a>

---


### SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference <a name="SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference;

new SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resetAmazonForecastRoleArn">resetAmazonForecastRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAmazonForecastRoleArn` <a name="resetAmazonForecastRoleArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resetAmazonForecastRoleArn"></a>

```java
public void resetAmazonForecastRoleArn()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.amazonForecastRoleArnInput">amazonForecastRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.amazonForecastRoleArn">amazonForecastRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amazonForecastRoleArnInput`<sup>Optional</sup> <a name="amazonForecastRoleArnInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.amazonForecastRoleArnInput"></a>

```java
public java.lang.String getAmazonForecastRoleArnInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `amazonForecastRoleArn`<sup>Required</sup> <a name="amazonForecastRoleArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.amazonForecastRoleArn"></a>

```java
public java.lang.String getAmazonForecastRoleArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.internalValue"></a>

```java
public SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a>

---


### SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList;

new SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.get"></a>

```java
public SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository</a>>

---


### SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference;

new SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput">repositoryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoryUrlInput`<sup>Optional</sup> <a name="repositoryUrlInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput"></a>

```java
public java.lang.String getRepositoryUrlInput();
```

- *Type:* java.lang.String

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository</a> OR com.hashicorp.cdktf.IResolvable

---


### SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference;

new SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">resetSagemakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">resetSagemakerImageVersionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```java
public void resetLifecycleConfigArn()
```

##### `resetSagemakerImageArn` <a name="resetSagemakerImageArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```java
public void resetSagemakerImageArn()
```

##### `resetSagemakerImageVersionArn` <a name="resetSagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```java
public void resetSagemakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">sagemakerImageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">sagemakerImageVersionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">sagemakerImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">sagemakerImageVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```java
public java.lang.String getLifecycleConfigArnInput();
```

- *Type:* java.lang.String

---

##### `sagemakerImageArnInput`<sup>Optional</sup> <a name="sagemakerImageArnInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```java
public java.lang.String getSagemakerImageArnInput();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionArnInput`<sup>Optional</sup> <a name="sagemakerImageVersionArnInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```java
public java.lang.String getSagemakerImageVersionArnInput();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `sagemakerImageArn`<sup>Required</sup> <a name="sagemakerImageArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```java
public java.lang.String getSagemakerImageArn();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionArn`<sup>Required</sup> <a name="sagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```java
public java.lang.String getSagemakerImageVersionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```java
public SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---


### SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference;

new SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putCodeRepository">putCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetCodeRepository">resetCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec">resetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns">resetLifecycleConfigArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeRepository` <a name="putCodeRepository" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putCodeRepository"></a>

```java
public void putCodeRepository(IResolvable OR java.util.List<SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putCodeRepository.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository</a>>

---

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec"></a>

```java
public void putDefaultResourceSpec(SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `resetCodeRepository` <a name="resetCodeRepository" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetCodeRepository"></a>

```java
public void resetCodeRepository()
```

##### `resetDefaultResourceSpec` <a name="resetDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```java
public void resetDefaultResourceSpec()
```

##### `resetLifecycleConfigArns` <a name="resetLifecycleConfigArns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```java
public void resetLifecycleConfigArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.codeRepository">codeRepository</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.codeRepositoryInput">codeRepositoryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycleConfigArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeRepository`<sup>Required</sup> <a name="codeRepository" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.codeRepository"></a>

```java
public SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList getCodeRepository();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec"></a>

```java
public SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `codeRepositoryInput`<sup>Optional</sup> <a name="codeRepositoryInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.codeRepositoryInput"></a>

```java
public java.lang.Object getCodeRepositoryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository">SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository</a>>

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```java
public SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec getDefaultResourceSpecInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `lifecycleConfigArnsInput`<sup>Optional</sup> <a name="lifecycleConfigArnsInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.internalValue"></a>

```java
public SagemakerUserProfileUserSettingsJupyterServerAppSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a>

---


### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList;

new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.get"></a>

```java
public SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage</a>>

---


### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference;

new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.resetImageVersionNumber">resetImageVersionNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageVersionNumber` <a name="resetImageVersionNumber" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.resetImageVersionNumber"></a>

```java
public void resetImageVersionNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigNameInput">appImageConfigNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumberInput">imageVersionNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigName">appImageConfigName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumber">imageVersionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appImageConfigNameInput`<sup>Optional</sup> <a name="appImageConfigNameInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigNameInput"></a>

```java
public java.lang.String getAppImageConfigNameInput();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `imageVersionNumberInput`<sup>Optional</sup> <a name="imageVersionNumberInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumberInput"></a>

```java
public java.lang.Number getImageVersionNumberInput();
```

- *Type:* java.lang.Number

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigName"></a>

```java
public java.lang.String getAppImageConfigName();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `imageVersionNumber`<sup>Required</sup> <a name="imageVersionNumber" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumber"></a>

```java
public java.lang.Number getImageVersionNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage</a> OR com.hashicorp.cdktf.IResolvable

---


### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference;

new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">resetSagemakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">resetSagemakerImageVersionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```java
public void resetLifecycleConfigArn()
```

##### `resetSagemakerImageArn` <a name="resetSagemakerImageArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```java
public void resetSagemakerImageArn()
```

##### `resetSagemakerImageVersionArn` <a name="resetSagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```java
public void resetSagemakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">sagemakerImageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">sagemakerImageVersionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">sagemakerImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">sagemakerImageVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```java
public java.lang.String getLifecycleConfigArnInput();
```

- *Type:* java.lang.String

---

##### `sagemakerImageArnInput`<sup>Optional</sup> <a name="sagemakerImageArnInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```java
public java.lang.String getSagemakerImageArnInput();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionArnInput`<sup>Optional</sup> <a name="sagemakerImageVersionArnInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```java
public java.lang.String getSagemakerImageVersionArnInput();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `sagemakerImageArn`<sup>Required</sup> <a name="sagemakerImageArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```java
public java.lang.String getSagemakerImageArn();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionArn`<sup>Required</sup> <a name="sagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```java
public java.lang.String getSagemakerImageVersionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```java
public SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---


### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference;

new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putCustomImage">putCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetCustomImage">resetCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec">resetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns">resetLifecycleConfigArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomImage` <a name="putCustomImage" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putCustomImage"></a>

```java
public void putCustomImage(IResolvable OR java.util.List<SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putCustomImage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage</a>>

---

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec"></a>

```java
public void putDefaultResourceSpec(SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `resetCustomImage` <a name="resetCustomImage" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetCustomImage"></a>

```java
public void resetCustomImage()
```

##### `resetDefaultResourceSpec` <a name="resetDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```java
public void resetDefaultResourceSpec()
```

##### `resetLifecycleConfigArns` <a name="resetLifecycleConfigArns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```java
public void resetLifecycleConfigArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImage">customImage</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImageInput">customImageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycleConfigArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customImage`<sup>Required</sup> <a name="customImage" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImage"></a>

```java
public SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList getCustomImage();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec"></a>

```java
public SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `customImageInput`<sup>Optional</sup> <a name="customImageInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImageInput"></a>

```java
public java.lang.Object getCustomImageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage</a>>

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```java
public SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec getDefaultResourceSpecInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `lifecycleConfigArnsInput`<sup>Optional</sup> <a name="lifecycleConfigArnsInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```java
public java.util.List<java.lang.String> getLifecycleConfigArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.internalValue"></a>

```java
public SagemakerUserProfileUserSettingsKernelGatewayAppSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a>

---


### SagemakerUserProfileUserSettingsOutputReference <a name="SagemakerUserProfileUserSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsOutputReference;

new SagemakerUserProfileUserSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCanvasAppSettings">putCanvasAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterServerAppSettings">putJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putKernelGatewayAppSettings">putKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putRSessionAppSettings">putRSessionAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSharingSettings">putSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putTensorBoardAppSettings">putTensorBoardAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCanvasAppSettings">resetCanvasAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetJupyterServerAppSettings">resetJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetKernelGatewayAppSettings">resetKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetRSessionAppSettings">resetRSessionAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSharingSettings">resetSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetTensorBoardAppSettings">resetTensorBoardAppSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCanvasAppSettings` <a name="putCanvasAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCanvasAppSettings"></a>

```java
public void putCanvasAppSettings(SagemakerUserProfileUserSettingsCanvasAppSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCanvasAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings">SagemakerUserProfileUserSettingsCanvasAppSettings</a>

---

##### `putJupyterServerAppSettings` <a name="putJupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterServerAppSettings"></a>

```java
public void putJupyterServerAppSettings(SagemakerUserProfileUserSettingsJupyterServerAppSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterServerAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a>

---

##### `putKernelGatewayAppSettings` <a name="putKernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putKernelGatewayAppSettings"></a>

```java
public void putKernelGatewayAppSettings(SagemakerUserProfileUserSettingsKernelGatewayAppSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putKernelGatewayAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a>

---

##### `putRSessionAppSettings` <a name="putRSessionAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putRSessionAppSettings"></a>

```java
public void putRSessionAppSettings(SagemakerUserProfileUserSettingsRSessionAppSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putRSessionAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings">SagemakerUserProfileUserSettingsRSessionAppSettings</a>

---

##### `putSharingSettings` <a name="putSharingSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSharingSettings"></a>

```java
public void putSharingSettings(SagemakerUserProfileUserSettingsSharingSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSharingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a>

---

##### `putTensorBoardAppSettings` <a name="putTensorBoardAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putTensorBoardAppSettings"></a>

```java
public void putTensorBoardAppSettings(SagemakerUserProfileUserSettingsTensorBoardAppSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putTensorBoardAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings">SagemakerUserProfileUserSettingsTensorBoardAppSettings</a>

---

##### `resetCanvasAppSettings` <a name="resetCanvasAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCanvasAppSettings"></a>

```java
public void resetCanvasAppSettings()
```

##### `resetJupyterServerAppSettings` <a name="resetJupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetJupyterServerAppSettings"></a>

```java
public void resetJupyterServerAppSettings()
```

##### `resetKernelGatewayAppSettings` <a name="resetKernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetKernelGatewayAppSettings"></a>

```java
public void resetKernelGatewayAppSettings()
```

##### `resetRSessionAppSettings` <a name="resetRSessionAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetRSessionAppSettings"></a>

```java
public void resetRSessionAppSettings()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSharingSettings` <a name="resetSharingSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSharingSettings"></a>

```java
public void resetSharingSettings()
```

##### `resetTensorBoardAppSettings` <a name="resetTensorBoardAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetTensorBoardAppSettings"></a>

```java
public void resetTensorBoardAppSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.canvasAppSettings">canvasAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference">SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettings">jupyterServerAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettings">kernelGatewayAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rSessionAppSettings">rSessionAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference">SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.sharingSettings">sharingSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference">SagemakerUserProfileUserSettingsSharingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.tensorBoardAppSettings">tensorBoardAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference">SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.canvasAppSettingsInput">canvasAppSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings">SagemakerUserProfileUserSettingsCanvasAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.executionRoleInput">executionRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettingsInput">jupyterServerAppSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettingsInput">kernelGatewayAppSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rSessionAppSettingsInput">rSessionAppSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings">SagemakerUserProfileUserSettingsRSessionAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.sharingSettingsInput">sharingSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.tensorBoardAppSettingsInput">tensorBoardAppSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings">SagemakerUserProfileUserSettingsTensorBoardAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `canvasAppSettings`<sup>Required</sup> <a name="canvasAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.canvasAppSettings"></a>

```java
public SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference getCanvasAppSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference">SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference</a>

---

##### `jupyterServerAppSettings`<sup>Required</sup> <a name="jupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettings"></a>

```java
public SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference getJupyterServerAppSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference</a>

---

##### `kernelGatewayAppSettings`<sup>Required</sup> <a name="kernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettings"></a>

```java
public SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference getKernelGatewayAppSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference</a>

---

##### `rSessionAppSettings`<sup>Required</sup> <a name="rSessionAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rSessionAppSettings"></a>

```java
public SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference getRSessionAppSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference">SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference</a>

---

##### `sharingSettings`<sup>Required</sup> <a name="sharingSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.sharingSettings"></a>

```java
public SagemakerUserProfileUserSettingsSharingSettingsOutputReference getSharingSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference">SagemakerUserProfileUserSettingsSharingSettingsOutputReference</a>

---

##### `tensorBoardAppSettings`<sup>Required</sup> <a name="tensorBoardAppSettings" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.tensorBoardAppSettings"></a>

```java
public SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference getTensorBoardAppSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference">SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference</a>

---

##### `canvasAppSettingsInput`<sup>Optional</sup> <a name="canvasAppSettingsInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.canvasAppSettingsInput"></a>

```java
public SagemakerUserProfileUserSettingsCanvasAppSettings getCanvasAppSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsCanvasAppSettings">SagemakerUserProfileUserSettingsCanvasAppSettings</a>

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.executionRoleInput"></a>

```java
public java.lang.String getExecutionRoleInput();
```

- *Type:* java.lang.String

---

##### `jupyterServerAppSettingsInput`<sup>Optional</sup> <a name="jupyterServerAppSettingsInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettingsInput"></a>

```java
public SagemakerUserProfileUserSettingsJupyterServerAppSettings getJupyterServerAppSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a>

---

##### `kernelGatewayAppSettingsInput`<sup>Optional</sup> <a name="kernelGatewayAppSettingsInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettingsInput"></a>

```java
public SagemakerUserProfileUserSettingsKernelGatewayAppSettings getKernelGatewayAppSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a>

---

##### `rSessionAppSettingsInput`<sup>Optional</sup> <a name="rSessionAppSettingsInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rSessionAppSettingsInput"></a>

```java
public SagemakerUserProfileUserSettingsRSessionAppSettings getRSessionAppSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings">SagemakerUserProfileUserSettingsRSessionAppSettings</a>

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sharingSettingsInput`<sup>Optional</sup> <a name="sharingSettingsInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.sharingSettingsInput"></a>

```java
public SagemakerUserProfileUserSettingsSharingSettings getSharingSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a>

---

##### `tensorBoardAppSettingsInput`<sup>Optional</sup> <a name="tensorBoardAppSettingsInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.tensorBoardAppSettingsInput"></a>

```java
public SagemakerUserProfileUserSettingsTensorBoardAppSettings getTensorBoardAppSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings">SagemakerUserProfileUserSettingsTensorBoardAppSettings</a>

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.internalValue"></a>

```java
public SagemakerUserProfileUserSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a>

---


### SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList <a name="SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList;

new SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.get"></a>

```java
public SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage</a>>

---


### SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference <a name="SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference;

new SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.resetImageVersionNumber">resetImageVersionNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageVersionNumber` <a name="resetImageVersionNumber" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.resetImageVersionNumber"></a>

```java
public void resetImageVersionNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.appImageConfigNameInput">appImageConfigNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageVersionNumberInput">imageVersionNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.appImageConfigName">appImageConfigName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageVersionNumber">imageVersionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appImageConfigNameInput`<sup>Optional</sup> <a name="appImageConfigNameInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.appImageConfigNameInput"></a>

```java
public java.lang.String getAppImageConfigNameInput();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `imageVersionNumberInput`<sup>Optional</sup> <a name="imageVersionNumberInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageVersionNumberInput"></a>

```java
public java.lang.Number getImageVersionNumberInput();
```

- *Type:* java.lang.Number

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.appImageConfigName"></a>

```java
public java.lang.String getAppImageConfigName();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `imageVersionNumber`<sup>Required</sup> <a name="imageVersionNumber" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageVersionNumber"></a>

```java
public java.lang.Number getImageVersionNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage</a> OR com.hashicorp.cdktf.IResolvable

---


### SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference;

new SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">resetSagemakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">resetSagemakerImageVersionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```java
public void resetLifecycleConfigArn()
```

##### `resetSagemakerImageArn` <a name="resetSagemakerImageArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```java
public void resetSagemakerImageArn()
```

##### `resetSagemakerImageVersionArn` <a name="resetSagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```java
public void resetSagemakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">sagemakerImageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">sagemakerImageVersionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">sagemakerImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">sagemakerImageVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```java
public java.lang.String getLifecycleConfigArnInput();
```

- *Type:* java.lang.String

---

##### `sagemakerImageArnInput`<sup>Optional</sup> <a name="sagemakerImageArnInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```java
public java.lang.String getSagemakerImageArnInput();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionArnInput`<sup>Optional</sup> <a name="sagemakerImageVersionArnInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```java
public java.lang.String getSagemakerImageVersionArnInput();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `sagemakerImageArn`<sup>Required</sup> <a name="sagemakerImageArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```java
public java.lang.String getSagemakerImageArn();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionArn`<sup>Required</sup> <a name="sagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```java
public java.lang.String getSagemakerImageVersionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```java
public SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec</a>

---


### SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference;

new SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.putCustomImage">putCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.resetCustomImage">resetCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.resetDefaultResourceSpec">resetDefaultResourceSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomImage` <a name="putCustomImage" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.putCustomImage"></a>

```java
public void putCustomImage(IResolvable OR java.util.List<SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.putCustomImage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage</a>>

---

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.putDefaultResourceSpec"></a>

```java
public void putDefaultResourceSpec(SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec</a>

---

##### `resetCustomImage` <a name="resetCustomImage" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.resetCustomImage"></a>

```java
public void resetCustomImage()
```

##### `resetDefaultResourceSpec` <a name="resetDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```java
public void resetDefaultResourceSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.customImage">customImage</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.customImageInput">customImageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings">SagemakerUserProfileUserSettingsRSessionAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customImage`<sup>Required</sup> <a name="customImage" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.customImage"></a>

```java
public SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList getCustomImage();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.defaultResourceSpec"></a>

```java
public SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `customImageInput`<sup>Optional</sup> <a name="customImageInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.customImageInput"></a>

```java
public java.lang.Object getCustomImageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage">SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage</a>>

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```java
public SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec getDefaultResourceSpecInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference.property.internalValue"></a>

```java
public SagemakerUserProfileUserSettingsRSessionAppSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsRSessionAppSettings">SagemakerUserProfileUserSettingsRSessionAppSettings</a>

---


### SagemakerUserProfileUserSettingsSharingSettingsOutputReference <a name="SagemakerUserProfileUserSettingsSharingSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference;

new SagemakerUserProfileUserSettingsSharingSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetNotebookOutputOption">resetNotebookOutputOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetS3KmsKeyId">resetS3KmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetS3OutputPath">resetS3OutputPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNotebookOutputOption` <a name="resetNotebookOutputOption" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetNotebookOutputOption"></a>

```java
public void resetNotebookOutputOption()
```

##### `resetS3KmsKeyId` <a name="resetS3KmsKeyId" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetS3KmsKeyId"></a>

```java
public void resetS3KmsKeyId()
```

##### `resetS3OutputPath` <a name="resetS3OutputPath" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetS3OutputPath"></a>

```java
public void resetS3OutputPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOptionInput">notebookOutputOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyIdInput">s3KmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPathInput">s3OutputPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOption">notebookOutputOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyId">s3KmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPath">s3OutputPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `notebookOutputOptionInput`<sup>Optional</sup> <a name="notebookOutputOptionInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOptionInput"></a>

```java
public java.lang.String getNotebookOutputOptionInput();
```

- *Type:* java.lang.String

---

##### `s3KmsKeyIdInput`<sup>Optional</sup> <a name="s3KmsKeyIdInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyIdInput"></a>

```java
public java.lang.String getS3KmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `s3OutputPathInput`<sup>Optional</sup> <a name="s3OutputPathInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPathInput"></a>

```java
public java.lang.String getS3OutputPathInput();
```

- *Type:* java.lang.String

---

##### `notebookOutputOption`<sup>Required</sup> <a name="notebookOutputOption" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOption"></a>

```java
public java.lang.String getNotebookOutputOption();
```

- *Type:* java.lang.String

---

##### `s3KmsKeyId`<sup>Required</sup> <a name="s3KmsKeyId" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyId"></a>

```java
public java.lang.String getS3KmsKeyId();
```

- *Type:* java.lang.String

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPath"></a>

```java
public java.lang.String getS3OutputPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.internalValue"></a>

```java
public SagemakerUserProfileUserSettingsSharingSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a>

---


### SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference;

new SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">resetSagemakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">resetSagemakerImageVersionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```java
public void resetLifecycleConfigArn()
```

##### `resetSagemakerImageArn` <a name="resetSagemakerImageArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```java
public void resetSagemakerImageArn()
```

##### `resetSagemakerImageVersionArn` <a name="resetSagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```java
public void resetSagemakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">sagemakerImageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">sagemakerImageVersionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">sagemakerImageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">sagemakerImageVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```java
public java.lang.String getLifecycleConfigArnInput();
```

- *Type:* java.lang.String

---

##### `sagemakerImageArnInput`<sup>Optional</sup> <a name="sagemakerImageArnInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```java
public java.lang.String getSagemakerImageArnInput();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionArnInput`<sup>Optional</sup> <a name="sagemakerImageVersionArnInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```java
public java.lang.String getSagemakerImageVersionArnInput();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```java
public java.lang.String getLifecycleConfigArn();
```

- *Type:* java.lang.String

---

##### `sagemakerImageArn`<sup>Required</sup> <a name="sagemakerImageArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```java
public java.lang.String getSagemakerImageArn();
```

- *Type:* java.lang.String

---

##### `sagemakerImageVersionArn`<sup>Required</sup> <a name="sagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```java
public java.lang.String getSagemakerImageVersionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```java
public SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a>

---


### SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sagemaker_user_profile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference;

new SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.putDefaultResourceSpec"></a>

```java
public void putDefaultResourceSpec(SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings">SagemakerUserProfileUserSettingsTensorBoardAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.property.defaultResourceSpec"></a>

```java
public SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference getDefaultResourceSpec();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```java
public SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec getDefaultResourceSpecInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference.property.internalValue"></a>

```java
public SagemakerUserProfileUserSettingsTensorBoardAppSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerUserProfile.SagemakerUserProfileUserSettingsTensorBoardAppSettings">SagemakerUserProfileUserSettingsTensorBoardAppSettings</a>

---



