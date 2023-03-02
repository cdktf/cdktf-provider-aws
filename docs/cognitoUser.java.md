# `cognitoUser` Submodule <a name="`cognitoUser` Submodule" id="@cdktf/provider-aws.cognitoUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUser <a name="CognitoUser" id="@cdktf/provider-aws.cognitoUser.CognitoUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user aws_cognito_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user.CognitoUser;

CognitoUser.Builder.create(Construct scope, java.lang.String id)
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
    .username(java.lang.String)
    .userPoolId(java.lang.String)
//  .attributes(java.util.Map<java.lang.String, java.lang.String>)
//  .clientMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .desiredDeliveryMediums(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .forceAliasCreation(java.lang.Boolean)
//  .forceAliasCreation(IResolvable)
//  .id(java.lang.String)
//  .messageAction(java.lang.String)
//  .password(java.lang.String)
//  .temporaryPassword(java.lang.String)
//  .validationData(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#username CognitoUser#username}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#user_pool_id CognitoUser#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#attributes CognitoUser#attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.clientMetadata">clientMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#client_metadata CognitoUser#client_metadata}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.desiredDeliveryMediums">desiredDeliveryMediums</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#desired_delivery_mediums CognitoUser#desired_delivery_mediums}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#enabled CognitoUser#enabled}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.forceAliasCreation">forceAliasCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#force_alias_creation CognitoUser#force_alias_creation}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#id CognitoUser#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.messageAction">messageAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#message_action CognitoUser#message_action}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#password CognitoUser#password}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.temporaryPassword">temporaryPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#temporary_password CognitoUser#temporary_password}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.validationData">validationData</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#validation_data CognitoUser#validation_data}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#username CognitoUser#username}.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.userPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#user_pool_id CognitoUser#user_pool_id}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.attributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#attributes CognitoUser#attributes}.

---

##### `clientMetadata`<sup>Optional</sup> <a name="clientMetadata" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.clientMetadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#client_metadata CognitoUser#client_metadata}.

---

##### `desiredDeliveryMediums`<sup>Optional</sup> <a name="desiredDeliveryMediums" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.desiredDeliveryMediums"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#desired_delivery_mediums CognitoUser#desired_delivery_mediums}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#enabled CognitoUser#enabled}.

---

##### `forceAliasCreation`<sup>Optional</sup> <a name="forceAliasCreation" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.forceAliasCreation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#force_alias_creation CognitoUser#force_alias_creation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#id CognitoUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `messageAction`<sup>Optional</sup> <a name="messageAction" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.messageAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#message_action CognitoUser#message_action}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#password CognitoUser#password}.

---

##### `temporaryPassword`<sup>Optional</sup> <a name="temporaryPassword" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.temporaryPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#temporary_password CognitoUser#temporary_password}.

---

##### `validationData`<sup>Optional</sup> <a name="validationData" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.validationData"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#validation_data CognitoUser#validation_data}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetClientMetadata">resetClientMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetDesiredDeliveryMediums">resetDesiredDeliveryMediums</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetForceAliasCreation">resetForceAliasCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetMessageAction">resetMessageAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetTemporaryPassword">resetTemporaryPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetValidationData">resetValidationData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUser.CognitoUser.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cognitoUser.CognitoUser.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoUser.CognitoUser.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUser.CognitoUser.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cognitoUser.CognitoUser.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cognitoUser.CognitoUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cognitoUser.CognitoUser.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cognitoUser.CognitoUser.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetClientMetadata` <a name="resetClientMetadata" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetClientMetadata"></a>

```java
public void resetClientMetadata()
```

##### `resetDesiredDeliveryMediums` <a name="resetDesiredDeliveryMediums" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetDesiredDeliveryMediums"></a>

```java
public void resetDesiredDeliveryMediums()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetForceAliasCreation` <a name="resetForceAliasCreation" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetForceAliasCreation"></a>

```java
public void resetForceAliasCreation()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetId"></a>

```java
public void resetId()
```

##### `resetMessageAction` <a name="resetMessageAction" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetMessageAction"></a>

```java
public void resetMessageAction()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetTemporaryPassword` <a name="resetTemporaryPassword" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetTemporaryPassword"></a>

```java
public void resetTemporaryPassword()
```

##### `resetValidationData` <a name="resetValidationData" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetValidationData"></a>

```java
public void resetValidationData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user.CognitoUser;

CognitoUser.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user.CognitoUser;

CognitoUser.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user.CognitoUser;

CognitoUser.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.lastModifiedDate">lastModifiedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.mfaSettingList">mfaSettingList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.preferredMfaSetting">preferredMfaSetting</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.sub">sub</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.attributesInput">attributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.clientMetadataInput">clientMetadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.desiredDeliveryMediumsInput">desiredDeliveryMediumsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.forceAliasCreationInput">forceAliasCreationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.messageActionInput">messageActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.temporaryPasswordInput">temporaryPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.userPoolIdInput">userPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.validationDataInput">validationDataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.clientMetadata">clientMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.desiredDeliveryMediums">desiredDeliveryMediums</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.forceAliasCreation">forceAliasCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.messageAction">messageAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.temporaryPassword">temporaryPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.validationData">validationData</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `lastModifiedDate`<sup>Required</sup> <a name="lastModifiedDate" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.lastModifiedDate"></a>

```java
public java.lang.String getLastModifiedDate();
```

- *Type:* java.lang.String

---

##### `mfaSettingList`<sup>Required</sup> <a name="mfaSettingList" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.mfaSettingList"></a>

```java
public java.util.List<java.lang.String> getMfaSettingList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preferredMfaSetting`<sup>Required</sup> <a name="preferredMfaSetting" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.preferredMfaSetting"></a>

```java
public java.lang.String getPreferredMfaSetting();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `sub`<sup>Required</sup> <a name="sub" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.sub"></a>

```java
public java.lang.String getSub();
```

- *Type:* java.lang.String

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.attributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `clientMetadataInput`<sup>Optional</sup> <a name="clientMetadataInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.clientMetadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getClientMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `desiredDeliveryMediumsInput`<sup>Optional</sup> <a name="desiredDeliveryMediumsInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.desiredDeliveryMediumsInput"></a>

```java
public java.util.List<java.lang.String> getDesiredDeliveryMediumsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forceAliasCreationInput`<sup>Optional</sup> <a name="forceAliasCreationInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.forceAliasCreationInput"></a>

```java
public java.lang.Object getForceAliasCreationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `messageActionInput`<sup>Optional</sup> <a name="messageActionInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.messageActionInput"></a>

```java
public java.lang.String getMessageActionInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `temporaryPasswordInput`<sup>Optional</sup> <a name="temporaryPasswordInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.temporaryPasswordInput"></a>

```java
public java.lang.String getTemporaryPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.userPoolIdInput"></a>

```java
public java.lang.String getUserPoolIdInput();
```

- *Type:* java.lang.String

---

##### `validationDataInput`<sup>Optional</sup> <a name="validationDataInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.validationDataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getValidationDataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `clientMetadata`<sup>Required</sup> <a name="clientMetadata" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.clientMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getClientMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `desiredDeliveryMediums`<sup>Required</sup> <a name="desiredDeliveryMediums" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.desiredDeliveryMediums"></a>

```java
public java.util.List<java.lang.String> getDesiredDeliveryMediums();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forceAliasCreation`<sup>Required</sup> <a name="forceAliasCreation" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.forceAliasCreation"></a>

```java
public java.lang.Object getForceAliasCreation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `messageAction`<sup>Required</sup> <a name="messageAction" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.messageAction"></a>

```java
public java.lang.String getMessageAction();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `temporaryPassword`<sup>Required</sup> <a name="temporaryPassword" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.temporaryPassword"></a>

```java
public java.lang.String getTemporaryPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

##### `validationData`<sup>Required</sup> <a name="validationData" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.validationData"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getValidationData();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserConfig <a name="CognitoUserConfig" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user.CognitoUserConfig;

CognitoUserConfig.builder()
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
    .username(java.lang.String)
    .userPoolId(java.lang.String)
//  .attributes(java.util.Map<java.lang.String, java.lang.String>)
//  .clientMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .desiredDeliveryMediums(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .forceAliasCreation(java.lang.Boolean)
//  .forceAliasCreation(IResolvable)
//  .id(java.lang.String)
//  .messageAction(java.lang.String)
//  .password(java.lang.String)
//  .temporaryPassword(java.lang.String)
//  .validationData(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#username CognitoUser#username}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#user_pool_id CognitoUser#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#attributes CognitoUser#attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.clientMetadata">clientMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#client_metadata CognitoUser#client_metadata}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.desiredDeliveryMediums">desiredDeliveryMediums</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#desired_delivery_mediums CognitoUser#desired_delivery_mediums}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#enabled CognitoUser#enabled}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.forceAliasCreation">forceAliasCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#force_alias_creation CognitoUser#force_alias_creation}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#id CognitoUser#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.messageAction">messageAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#message_action CognitoUser#message_action}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#password CognitoUser#password}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.temporaryPassword">temporaryPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#temporary_password CognitoUser#temporary_password}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.validationData">validationData</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#validation_data CognitoUser#validation_data}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#username CognitoUser#username}.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#user_pool_id CognitoUser#user_pool_id}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#attributes CognitoUser#attributes}.

---

##### `clientMetadata`<sup>Optional</sup> <a name="clientMetadata" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.clientMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getClientMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#client_metadata CognitoUser#client_metadata}.

---

##### `desiredDeliveryMediums`<sup>Optional</sup> <a name="desiredDeliveryMediums" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.desiredDeliveryMediums"></a>

```java
public java.util.List<java.lang.String> getDesiredDeliveryMediums();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#desired_delivery_mediums CognitoUser#desired_delivery_mediums}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#enabled CognitoUser#enabled}.

---

##### `forceAliasCreation`<sup>Optional</sup> <a name="forceAliasCreation" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.forceAliasCreation"></a>

```java
public java.lang.Object getForceAliasCreation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#force_alias_creation CognitoUser#force_alias_creation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#id CognitoUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `messageAction`<sup>Optional</sup> <a name="messageAction" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.messageAction"></a>

```java
public java.lang.String getMessageAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#message_action CognitoUser#message_action}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#password CognitoUser#password}.

---

##### `temporaryPassword`<sup>Optional</sup> <a name="temporaryPassword" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.temporaryPassword"></a>

```java
public java.lang.String getTemporaryPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#temporary_password CognitoUser#temporary_password}.

---

##### `validationData`<sup>Optional</sup> <a name="validationData" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.validationData"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getValidationData();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#validation_data CognitoUser#validation_data}.

---



