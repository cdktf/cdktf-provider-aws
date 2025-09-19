# `cognitoManagedLoginBranding` Submodule <a name="`cognitoManagedLoginBranding` Submodule" id="@cdktf/provider-aws.cognitoManagedLoginBranding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoManagedLoginBranding <a name="CognitoManagedLoginBranding" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding aws_cognito_managed_login_branding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_managed_login_branding.CognitoManagedLoginBranding;

CognitoManagedLoginBranding.Builder.create(Construct scope, java.lang.String id)
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
    .clientId(java.lang.String)
    .userPoolId(java.lang.String)
//  .asset(IResolvable)
//  .asset(java.util.List<CognitoManagedLoginBrandingAsset>)
//  .region(java.lang.String)
//  .settings(java.lang.String)
//  .useCognitoProvidedValues(java.lang.Boolean)
//  .useCognitoProvidedValues(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#client_id CognitoManagedLoginBranding#client_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#user_pool_id CognitoManagedLoginBranding#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.asset">asset</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset">CognitoManagedLoginBrandingAsset</a>></code> | asset block. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.settings">settings</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#settings CognitoManagedLoginBranding#settings}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.useCognitoProvidedValues">useCognitoProvidedValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#use_cognito_provided_values CognitoManagedLoginBranding#use_cognito_provided_values}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#client_id CognitoManagedLoginBranding#client_id}.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.userPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#user_pool_id CognitoManagedLoginBranding#user_pool_id}.

---

##### `asset`<sup>Optional</sup> <a name="asset" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.asset"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset">CognitoManagedLoginBrandingAsset</a>>

asset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#asset CognitoManagedLoginBranding#asset}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#region CognitoManagedLoginBranding#region}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.settings"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#settings CognitoManagedLoginBranding#settings}.

---

##### `useCognitoProvidedValues`<sup>Optional</sup> <a name="useCognitoProvidedValues" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.useCognitoProvidedValues"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#use_cognito_provided_values CognitoManagedLoginBranding#use_cognito_provided_values}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.putAsset">putAsset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetAsset">resetAsset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetUseCognitoProvidedValues">resetUseCognitoProvidedValues</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAsset` <a name="putAsset" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.putAsset"></a>

```java
public void putAsset(IResolvable OR java.util.List<CognitoManagedLoginBrandingAsset> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.putAsset.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset">CognitoManagedLoginBrandingAsset</a>>

---

##### `resetAsset` <a name="resetAsset" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetAsset"></a>

```java
public void resetAsset()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetSettings"></a>

```java
public void resetSettings()
```

##### `resetUseCognitoProvidedValues` <a name="resetUseCognitoProvidedValues" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetUseCognitoProvidedValues"></a>

```java
public void resetUseCognitoProvidedValues()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CognitoManagedLoginBranding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_managed_login_branding.CognitoManagedLoginBranding;

CognitoManagedLoginBranding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_managed_login_branding.CognitoManagedLoginBranding;

CognitoManagedLoginBranding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_managed_login_branding.CognitoManagedLoginBranding;

CognitoManagedLoginBranding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_managed_login_branding.CognitoManagedLoginBranding;

CognitoManagedLoginBranding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CognitoManagedLoginBranding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CognitoManagedLoginBranding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CognitoManagedLoginBranding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CognitoManagedLoginBranding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CognitoManagedLoginBranding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.asset">asset</a></code> | <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList">CognitoManagedLoginBrandingAssetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.managedLoginBrandingId">managedLoginBrandingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settingsAll">settingsAll</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.assetInput">assetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset">CognitoManagedLoginBrandingAsset</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settingsInput">settingsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.useCognitoProvidedValuesInput">useCognitoProvidedValuesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.userPoolIdInput">userPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settings">settings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.useCognitoProvidedValues">useCognitoProvidedValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `asset`<sup>Required</sup> <a name="asset" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.asset"></a>

```java
public CognitoManagedLoginBrandingAssetList getAsset();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList">CognitoManagedLoginBrandingAssetList</a>

---

##### `managedLoginBrandingId`<sup>Required</sup> <a name="managedLoginBrandingId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.managedLoginBrandingId"></a>

```java
public java.lang.String getManagedLoginBrandingId();
```

- *Type:* java.lang.String

---

##### `settingsAll`<sup>Required</sup> <a name="settingsAll" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settingsAll"></a>

```java
public java.lang.String getSettingsAll();
```

- *Type:* java.lang.String

---

##### `assetInput`<sup>Optional</sup> <a name="assetInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.assetInput"></a>

```java
public java.lang.Object getAssetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset">CognitoManagedLoginBrandingAsset</a>>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settingsInput"></a>

```java
public java.lang.String getSettingsInput();
```

- *Type:* java.lang.String

---

##### `useCognitoProvidedValuesInput`<sup>Optional</sup> <a name="useCognitoProvidedValuesInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.useCognitoProvidedValuesInput"></a>

```java
public java.lang.Object getUseCognitoProvidedValuesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.userPoolIdInput"></a>

```java
public java.lang.String getUserPoolIdInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settings"></a>

```java
public java.lang.String getSettings();
```

- *Type:* java.lang.String

---

##### `useCognitoProvidedValues`<sup>Required</sup> <a name="useCognitoProvidedValues" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.useCognitoProvidedValues"></a>

```java
public java.lang.Object getUseCognitoProvidedValues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoManagedLoginBrandingAsset <a name="CognitoManagedLoginBrandingAsset" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_managed_login_branding.CognitoManagedLoginBrandingAsset;

CognitoManagedLoginBrandingAsset.builder()
    .category(java.lang.String)
    .colorMode(java.lang.String)
    .extension(java.lang.String)
//  .bytes(java.lang.String)
//  .resourceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.property.category">category</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#category CognitoManagedLoginBranding#category}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.property.colorMode">colorMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#color_mode CognitoManagedLoginBranding#color_mode}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.property.extension">extension</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#extension CognitoManagedLoginBranding#extension}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.property.bytes">bytes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#bytes CognitoManagedLoginBranding#bytes}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#resource_id CognitoManagedLoginBranding#resource_id}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#category CognitoManagedLoginBranding#category}.

---

##### `colorMode`<sup>Required</sup> <a name="colorMode" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.property.colorMode"></a>

```java
public java.lang.String getColorMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#color_mode CognitoManagedLoginBranding#color_mode}.

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.property.extension"></a>

```java
public java.lang.String getExtension();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#extension CognitoManagedLoginBranding#extension}.

---

##### `bytes`<sup>Optional</sup> <a name="bytes" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.property.bytes"></a>

```java
public java.lang.String getBytes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#bytes CognitoManagedLoginBranding#bytes}.

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#resource_id CognitoManagedLoginBranding#resource_id}.

---

### CognitoManagedLoginBrandingConfig <a name="CognitoManagedLoginBrandingConfig" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_managed_login_branding.CognitoManagedLoginBrandingConfig;

CognitoManagedLoginBrandingConfig.builder()
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
    .clientId(java.lang.String)
    .userPoolId(java.lang.String)
//  .asset(IResolvable)
//  .asset(java.util.List<CognitoManagedLoginBrandingAsset>)
//  .region(java.lang.String)
//  .settings(java.lang.String)
//  .useCognitoProvidedValues(java.lang.Boolean)
//  .useCognitoProvidedValues(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#client_id CognitoManagedLoginBranding#client_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#user_pool_id CognitoManagedLoginBranding#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.asset">asset</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset">CognitoManagedLoginBrandingAsset</a>></code> | asset block. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.settings">settings</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#settings CognitoManagedLoginBranding#settings}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.useCognitoProvidedValues">useCognitoProvidedValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#use_cognito_provided_values CognitoManagedLoginBranding#use_cognito_provided_values}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#client_id CognitoManagedLoginBranding#client_id}.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#user_pool_id CognitoManagedLoginBranding#user_pool_id}.

---

##### `asset`<sup>Optional</sup> <a name="asset" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.asset"></a>

```java
public java.lang.Object getAsset();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset">CognitoManagedLoginBrandingAsset</a>>

asset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#asset CognitoManagedLoginBranding#asset}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#region CognitoManagedLoginBranding#region}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.settings"></a>

```java
public java.lang.String getSettings();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#settings CognitoManagedLoginBranding#settings}.

---

##### `useCognitoProvidedValues`<sup>Optional</sup> <a name="useCognitoProvidedValues" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.useCognitoProvidedValues"></a>

```java
public java.lang.Object getUseCognitoProvidedValues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_managed_login_branding#use_cognito_provided_values CognitoManagedLoginBranding#use_cognito_provided_values}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoManagedLoginBrandingAssetList <a name="CognitoManagedLoginBrandingAssetList" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_managed_login_branding.CognitoManagedLoginBrandingAssetList;

new CognitoManagedLoginBrandingAssetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.get"></a>

```java
public CognitoManagedLoginBrandingAssetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset">CognitoManagedLoginBrandingAsset</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset">CognitoManagedLoginBrandingAsset</a>>

---


### CognitoManagedLoginBrandingAssetOutputReference <a name="CognitoManagedLoginBrandingAssetOutputReference" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_managed_login_branding.CognitoManagedLoginBrandingAssetOutputReference;

new CognitoManagedLoginBrandingAssetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.resetBytes">resetBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.resetResourceId">resetResourceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBytes` <a name="resetBytes" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.resetBytes"></a>

```java
public void resetBytes()
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.resetResourceId"></a>

```java
public void resetResourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.bytesInput">bytesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.colorModeInput">colorModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.extensionInput">extensionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.bytes">bytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.colorMode">colorMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.extension">extension</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset">CognitoManagedLoginBrandingAsset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bytesInput`<sup>Optional</sup> <a name="bytesInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.bytesInput"></a>

```java
public java.lang.String getBytesInput();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `colorModeInput`<sup>Optional</sup> <a name="colorModeInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.colorModeInput"></a>

```java
public java.lang.String getColorModeInput();
```

- *Type:* java.lang.String

---

##### `extensionInput`<sup>Optional</sup> <a name="extensionInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.extensionInput"></a>

```java
public java.lang.String getExtensionInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `bytes`<sup>Required</sup> <a name="bytes" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.bytes"></a>

```java
public java.lang.String getBytes();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `colorMode`<sup>Required</sup> <a name="colorMode" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.colorMode"></a>

```java
public java.lang.String getColorMode();
```

- *Type:* java.lang.String

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.extension"></a>

```java
public java.lang.String getExtension();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset">CognitoManagedLoginBrandingAsset</a>

---



