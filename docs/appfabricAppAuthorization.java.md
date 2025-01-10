# `appfabricAppAuthorization` Submodule <a name="`appfabricAppAuthorization` Submodule" id="@cdktf/provider-aws.appfabricAppAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppfabricAppAuthorization <a name="AppfabricAppAuthorization" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization aws_appfabric_app_authorization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization.AppfabricAppAuthorization;

AppfabricAppAuthorization.Builder.create(Construct scope, java.lang.String id)
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
    .app(java.lang.String)
    .appBundleArn(java.lang.String)
    .authType(java.lang.String)
//  .credential(IResolvable)
//  .credential(java.util.List<AppfabricAppAuthorizationCredential>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tenant(IResolvable)
//  .tenant(java.util.List<AppfabricAppAuthorizationTenant>)
//  .timeouts(AppfabricAppAuthorizationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.app">app</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#app AppfabricAppAuthorization#app}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.appBundleArn">appBundleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#app_bundle_arn AppfabricAppAuthorization#app_bundle_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#auth_type AppfabricAppAuthorization#auth_type}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.credential">credential</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>></code> | credential block. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#tags AppfabricAppAuthorization#tags}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.tenant">tenant</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>></code> | tenant block. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.app"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#app AppfabricAppAuthorization#app}.

---

##### `appBundleArn`<sup>Required</sup> <a name="appBundleArn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.appBundleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#app_bundle_arn AppfabricAppAuthorization#app_bundle_arn}.

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.authType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#auth_type AppfabricAppAuthorization#auth_type}.

---

##### `credential`<sup>Optional</sup> <a name="credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.credential"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>>

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#credential AppfabricAppAuthorization#credential}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#tags AppfabricAppAuthorization#tags}.

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.tenant"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>>

tenant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#tenant AppfabricAppAuthorization#tenant}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#timeouts AppfabricAppAuthorization#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putCredential">putCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTenant">putTenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetCredential">resetCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTenant">resetTenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCredential` <a name="putCredential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putCredential"></a>

```java
public void putCredential(IResolvable OR java.util.List<AppfabricAppAuthorizationCredential> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putCredential.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>>

---

##### `putTenant` <a name="putTenant" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTenant"></a>

```java
public void putTenant(IResolvable OR java.util.List<AppfabricAppAuthorizationTenant> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTenant.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTimeouts"></a>

```java
public void putTimeouts(AppfabricAppAuthorizationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a>

---

##### `resetCredential` <a name="resetCredential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetCredential"></a>

```java
public void resetCredential()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTags"></a>

```java
public void resetTags()
```

##### `resetTenant` <a name="resetTenant" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTenant"></a>

```java
public void resetTenant()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppfabricAppAuthorization resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization.AppfabricAppAuthorization;

AppfabricAppAuthorization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization.AppfabricAppAuthorization;

AppfabricAppAuthorization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization.AppfabricAppAuthorization;

AppfabricAppAuthorization.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization.AppfabricAppAuthorization;

AppfabricAppAuthorization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppfabricAppAuthorization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppfabricAppAuthorization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppfabricAppAuthorization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppfabricAppAuthorization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppfabricAppAuthorization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authUrl">authUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList">AppfabricAppAuthorizationCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.persona">persona</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tenant">tenant</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList">AppfabricAppAuthorizationTenantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference">AppfabricAppAuthorizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleArnInput">appBundleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appInput">appInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.credentialInput">credentialInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tenantInput">tenantInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.app">app</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleArn">appBundleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `authUrl`<sup>Required</sup> <a name="authUrl" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authUrl"></a>

```java
public java.lang.String getAuthUrl();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.credential"></a>

```java
public AppfabricAppAuthorizationCredentialList getCredential();
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList">AppfabricAppAuthorizationCredentialList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `persona`<sup>Required</sup> <a name="persona" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.persona"></a>

```java
public java.lang.String getPersona();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tenant"></a>

```java
public AppfabricAppAuthorizationTenantList getTenant();
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList">AppfabricAppAuthorizationTenantList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.timeouts"></a>

```java
public AppfabricAppAuthorizationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference">AppfabricAppAuthorizationTimeoutsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `appBundleArnInput`<sup>Optional</sup> <a name="appBundleArnInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleArnInput"></a>

```java
public java.lang.String getAppBundleArnInput();
```

- *Type:* java.lang.String

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appInput"></a>

```java
public java.lang.String getAppInput();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `credentialInput`<sup>Optional</sup> <a name="credentialInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.credentialInput"></a>

```java
public java.lang.Object getCredentialInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tenantInput`<sup>Optional</sup> <a name="tenantInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tenantInput"></a>

```java
public java.lang.Object getTenantInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.app"></a>

```java
public java.lang.String getApp();
```

- *Type:* java.lang.String

---

##### `appBundleArn`<sup>Required</sup> <a name="appBundleArn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleArn"></a>

```java
public java.lang.String getAppBundleArn();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppfabricAppAuthorizationConfig <a name="AppfabricAppAuthorizationConfig" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization.AppfabricAppAuthorizationConfig;

AppfabricAppAuthorizationConfig.builder()
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
    .app(java.lang.String)
    .appBundleArn(java.lang.String)
    .authType(java.lang.String)
//  .credential(IResolvable)
//  .credential(java.util.List<AppfabricAppAuthorizationCredential>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tenant(IResolvable)
//  .tenant(java.util.List<AppfabricAppAuthorizationTenant>)
//  .timeouts(AppfabricAppAuthorizationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.app">app</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#app AppfabricAppAuthorization#app}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.appBundleArn">appBundleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#app_bundle_arn AppfabricAppAuthorization#app_bundle_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#auth_type AppfabricAppAuthorization#auth_type}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.credential">credential</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>></code> | credential block. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#tags AppfabricAppAuthorization#tags}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.tenant">tenant</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>></code> | tenant block. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.app"></a>

```java
public java.lang.String getApp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#app AppfabricAppAuthorization#app}.

---

##### `appBundleArn`<sup>Required</sup> <a name="appBundleArn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.appBundleArn"></a>

```java
public java.lang.String getAppBundleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#app_bundle_arn AppfabricAppAuthorization#app_bundle_arn}.

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#auth_type AppfabricAppAuthorization#auth_type}.

---

##### `credential`<sup>Optional</sup> <a name="credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.credential"></a>

```java
public java.lang.Object getCredential();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>>

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#credential AppfabricAppAuthorization#credential}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#tags AppfabricAppAuthorization#tags}.

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.tenant"></a>

```java
public java.lang.Object getTenant();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>>

tenant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#tenant AppfabricAppAuthorization#tenant}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.timeouts"></a>

```java
public AppfabricAppAuthorizationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#timeouts AppfabricAppAuthorization#timeouts}

---

### AppfabricAppAuthorizationCredential <a name="AppfabricAppAuthorizationCredential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization.AppfabricAppAuthorizationCredential;

AppfabricAppAuthorizationCredential.builder()
//  .apiKeyCredential(IResolvable)
//  .apiKeyCredential(java.util.List<AppfabricAppAuthorizationCredentialApiKeyCredential>)
//  .oauth2Credential(IResolvable)
//  .oauth2Credential(java.util.List<AppfabricAppAuthorizationCredentialOauth2Credential>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.property.apiKeyCredential">apiKeyCredential</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>></code> | api_key_credential block. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.property.oauth2Credential">oauth2Credential</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>></code> | oauth2_credential block. |

---

##### `apiKeyCredential`<sup>Optional</sup> <a name="apiKeyCredential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.property.apiKeyCredential"></a>

```java
public java.lang.Object getApiKeyCredential();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>>

api_key_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#api_key_credential AppfabricAppAuthorization#api_key_credential}

---

##### `oauth2Credential`<sup>Optional</sup> <a name="oauth2Credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.property.oauth2Credential"></a>

```java
public java.lang.Object getOauth2Credential();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>>

oauth2_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#oauth2_credential AppfabricAppAuthorization#oauth2_credential}

---

### AppfabricAppAuthorizationCredentialApiKeyCredential <a name="AppfabricAppAuthorizationCredentialApiKeyCredential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization.AppfabricAppAuthorizationCredentialApiKeyCredential;

AppfabricAppAuthorizationCredentialApiKeyCredential.builder()
    .apiKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#api_key AppfabricAppAuthorization#api_key}. |

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#api_key AppfabricAppAuthorization#api_key}.

---

### AppfabricAppAuthorizationCredentialOauth2Credential <a name="AppfabricAppAuthorizationCredentialOauth2Credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization.AppfabricAppAuthorizationCredentialOauth2Credential;

AppfabricAppAuthorizationCredentialOauth2Credential.builder()
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#client_id AppfabricAppAuthorization#client_id}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#client_secret AppfabricAppAuthorization#client_secret}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#client_id AppfabricAppAuthorization#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#client_secret AppfabricAppAuthorization#client_secret}.

---

### AppfabricAppAuthorizationTenant <a name="AppfabricAppAuthorizationTenant" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization.AppfabricAppAuthorizationTenant;

AppfabricAppAuthorizationTenant.builder()
    .tenantDisplayName(java.lang.String)
    .tenantIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.property.tenantDisplayName">tenantDisplayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#tenant_display_name AppfabricAppAuthorization#tenant_display_name}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.property.tenantIdentifier">tenantIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#tenant_identifier AppfabricAppAuthorization#tenant_identifier}. |

---

##### `tenantDisplayName`<sup>Required</sup> <a name="tenantDisplayName" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.property.tenantDisplayName"></a>

```java
public java.lang.String getTenantDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#tenant_display_name AppfabricAppAuthorization#tenant_display_name}.

---

##### `tenantIdentifier`<sup>Required</sup> <a name="tenantIdentifier" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.property.tenantIdentifier"></a>

```java
public java.lang.String getTenantIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#tenant_identifier AppfabricAppAuthorization#tenant_identifier}.

---

### AppfabricAppAuthorizationTimeouts <a name="AppfabricAppAuthorizationTimeouts" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization.AppfabricAppAuthorizationTimeouts;

AppfabricAppAuthorizationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#create AppfabricAppAuthorization#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#delete AppfabricAppAuthorization#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/appfabric_app_authorization#update AppfabricAppAuthorization#update}

---

## Classes <a name="Classes" id="Classes"></a>

### AppfabricAppAuthorizationCredentialApiKeyCredentialList <a name="AppfabricAppAuthorizationCredentialApiKeyCredentialList" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList;

new AppfabricAppAuthorizationCredentialApiKeyCredentialList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.get"></a>

```java
public AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>>

---


### AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference <a name="AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference;

new AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.apiKeyInput"></a>

```java
public java.lang.String getApiKeyInput();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>

---


### AppfabricAppAuthorizationCredentialList <a name="AppfabricAppAuthorizationCredentialList" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization.AppfabricAppAuthorizationCredentialList;

new AppfabricAppAuthorizationCredentialList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.get"></a>

```java
public AppfabricAppAuthorizationCredentialOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>>

---


### AppfabricAppAuthorizationCredentialOauth2CredentialList <a name="AppfabricAppAuthorizationCredentialOauth2CredentialList" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization.AppfabricAppAuthorizationCredentialOauth2CredentialList;

new AppfabricAppAuthorizationCredentialOauth2CredentialList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.get"></a>

```java
public AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>>

---


### AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference <a name="AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference;

new AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>

---


### AppfabricAppAuthorizationCredentialOutputReference <a name="AppfabricAppAuthorizationCredentialOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization.AppfabricAppAuthorizationCredentialOutputReference;

new AppfabricAppAuthorizationCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putApiKeyCredential">putApiKeyCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putOauth2Credential">putOauth2Credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resetApiKeyCredential">resetApiKeyCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resetOauth2Credential">resetOauth2Credential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyCredential` <a name="putApiKeyCredential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putApiKeyCredential"></a>

```java
public void putApiKeyCredential(IResolvable OR java.util.List<AppfabricAppAuthorizationCredentialApiKeyCredential> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putApiKeyCredential.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>>

---

##### `putOauth2Credential` <a name="putOauth2Credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putOauth2Credential"></a>

```java
public void putOauth2Credential(IResolvable OR java.util.List<AppfabricAppAuthorizationCredentialOauth2Credential> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putOauth2Credential.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>>

---

##### `resetApiKeyCredential` <a name="resetApiKeyCredential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resetApiKeyCredential"></a>

```java
public void resetApiKeyCredential()
```

##### `resetOauth2Credential` <a name="resetOauth2Credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resetOauth2Credential"></a>

```java
public void resetOauth2Credential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.apiKeyCredential">apiKeyCredential</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList">AppfabricAppAuthorizationCredentialApiKeyCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.oauth2Credential">oauth2Credential</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList">AppfabricAppAuthorizationCredentialOauth2CredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.apiKeyCredentialInput">apiKeyCredentialInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.oauth2CredentialInput">oauth2CredentialInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyCredential`<sup>Required</sup> <a name="apiKeyCredential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.apiKeyCredential"></a>

```java
public AppfabricAppAuthorizationCredentialApiKeyCredentialList getApiKeyCredential();
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList">AppfabricAppAuthorizationCredentialApiKeyCredentialList</a>

---

##### `oauth2Credential`<sup>Required</sup> <a name="oauth2Credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.oauth2Credential"></a>

```java
public AppfabricAppAuthorizationCredentialOauth2CredentialList getOauth2Credential();
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList">AppfabricAppAuthorizationCredentialOauth2CredentialList</a>

---

##### `apiKeyCredentialInput`<sup>Optional</sup> <a name="apiKeyCredentialInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.apiKeyCredentialInput"></a>

```java
public java.lang.Object getApiKeyCredentialInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>>

---

##### `oauth2CredentialInput`<sup>Optional</sup> <a name="oauth2CredentialInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.oauth2CredentialInput"></a>

```java
public java.lang.Object getOauth2CredentialInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>

---


### AppfabricAppAuthorizationTenantList <a name="AppfabricAppAuthorizationTenantList" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization.AppfabricAppAuthorizationTenantList;

new AppfabricAppAuthorizationTenantList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.get"></a>

```java
public AppfabricAppAuthorizationTenantOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>>

---


### AppfabricAppAuthorizationTenantOutputReference <a name="AppfabricAppAuthorizationTenantOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization.AppfabricAppAuthorizationTenantOutputReference;

new AppfabricAppAuthorizationTenantOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantDisplayNameInput">tenantDisplayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantIdentifierInput">tenantIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantDisplayName">tenantDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantIdentifier">tenantIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tenantDisplayNameInput`<sup>Optional</sup> <a name="tenantDisplayNameInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantDisplayNameInput"></a>

```java
public java.lang.String getTenantDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `tenantIdentifierInput`<sup>Optional</sup> <a name="tenantIdentifierInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantIdentifierInput"></a>

```java
public java.lang.String getTenantIdentifierInput();
```

- *Type:* java.lang.String

---

##### `tenantDisplayName`<sup>Required</sup> <a name="tenantDisplayName" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantDisplayName"></a>

```java
public java.lang.String getTenantDisplayName();
```

- *Type:* java.lang.String

---

##### `tenantIdentifier`<sup>Required</sup> <a name="tenantIdentifier" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantIdentifier"></a>

```java
public java.lang.String getTenantIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>

---


### AppfabricAppAuthorizationTimeoutsOutputReference <a name="AppfabricAppAuthorizationTimeoutsOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization.AppfabricAppAuthorizationTimeoutsOutputReference;

new AppfabricAppAuthorizationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a>

---



