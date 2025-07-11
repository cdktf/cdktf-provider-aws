# `appfabricAppAuthorizationConnection` Submodule <a name="`appfabricAppAuthorizationConnection` Submodule" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppfabricAppAuthorizationConnection <a name="AppfabricAppAuthorizationConnection" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/appfabric_app_authorization_connection aws_appfabric_app_authorization_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization_connection.AppfabricAppAuthorizationConnection;

AppfabricAppAuthorizationConnection.Builder.create(Construct scope, java.lang.String id)
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
    .appAuthorizationArn(java.lang.String)
    .appBundleArn(java.lang.String)
//  .authRequest(IResolvable)
//  .authRequest(java.util.List<AppfabricAppAuthorizationConnectionAuthRequest>)
//  .region(java.lang.String)
//  .timeouts(AppfabricAppAuthorizationConnectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.appAuthorizationArn">appAuthorizationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/appfabric_app_authorization_connection#app_authorization_arn AppfabricAppAuthorizationConnection#app_authorization_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.appBundleArn">appBundleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/appfabric_app_authorization_connection#app_bundle_arn AppfabricAppAuthorizationConnection#app_bundle_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.authRequest">authRequest</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>></code> | auth_request block. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appAuthorizationArn`<sup>Required</sup> <a name="appAuthorizationArn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.appAuthorizationArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/appfabric_app_authorization_connection#app_authorization_arn AppfabricAppAuthorizationConnection#app_authorization_arn}.

---

##### `appBundleArn`<sup>Required</sup> <a name="appBundleArn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.appBundleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/appfabric_app_authorization_connection#app_bundle_arn AppfabricAppAuthorizationConnection#app_bundle_arn}.

---

##### `authRequest`<sup>Optional</sup> <a name="authRequest" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.authRequest"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>>

auth_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/appfabric_app_authorization_connection#auth_request AppfabricAppAuthorizationConnection#auth_request}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/appfabric_app_authorization_connection#region AppfabricAppAuthorizationConnection#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/appfabric_app_authorization_connection#timeouts AppfabricAppAuthorizationConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putAuthRequest">putAuthRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetAuthRequest">resetAuthRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthRequest` <a name="putAuthRequest" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putAuthRequest"></a>

```java
public void putAuthRequest(IResolvable OR java.util.List<AppfabricAppAuthorizationConnectionAuthRequest> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putAuthRequest.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putTimeouts"></a>

```java
public void putTimeouts(AppfabricAppAuthorizationConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a>

---

##### `resetAuthRequest` <a name="resetAuthRequest" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetAuthRequest"></a>

```java
public void resetAuthRequest()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppfabricAppAuthorizationConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization_connection.AppfabricAppAuthorizationConnection;

AppfabricAppAuthorizationConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization_connection.AppfabricAppAuthorizationConnection;

AppfabricAppAuthorizationConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization_connection.AppfabricAppAuthorizationConnection;

AppfabricAppAuthorizationConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization_connection.AppfabricAppAuthorizationConnection;

AppfabricAppAuthorizationConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppfabricAppAuthorizationConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppfabricAppAuthorizationConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppfabricAppAuthorizationConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppfabricAppAuthorizationConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/appfabric_app_authorization_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppfabricAppAuthorizationConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.app">app</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.authRequest">authRequest</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList">AppfabricAppAuthorizationConnectionAuthRequestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.tenant">tenant</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList">AppfabricAppAuthorizationConnectionTenantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference">AppfabricAppAuthorizationConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appAuthorizationArnInput">appAuthorizationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appBundleArnInput">appBundleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.authRequestInput">authRequestInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appAuthorizationArn">appAuthorizationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appBundleArn">appBundleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.app"></a>

```java
public java.lang.String getApp();
```

- *Type:* java.lang.String

---

##### `authRequest`<sup>Required</sup> <a name="authRequest" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.authRequest"></a>

```java
public AppfabricAppAuthorizationConnectionAuthRequestList getAuthRequest();
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList">AppfabricAppAuthorizationConnectionAuthRequestList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.tenant"></a>

```java
public AppfabricAppAuthorizationConnectionTenantList getTenant();
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList">AppfabricAppAuthorizationConnectionTenantList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.timeouts"></a>

```java
public AppfabricAppAuthorizationConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference">AppfabricAppAuthorizationConnectionTimeoutsOutputReference</a>

---

##### `appAuthorizationArnInput`<sup>Optional</sup> <a name="appAuthorizationArnInput" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appAuthorizationArnInput"></a>

```java
public java.lang.String getAppAuthorizationArnInput();
```

- *Type:* java.lang.String

---

##### `appBundleArnInput`<sup>Optional</sup> <a name="appBundleArnInput" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appBundleArnInput"></a>

```java
public java.lang.String getAppBundleArnInput();
```

- *Type:* java.lang.String

---

##### `authRequestInput`<sup>Optional</sup> <a name="authRequestInput" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.authRequestInput"></a>

```java
public java.lang.Object getAuthRequestInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a>

---

##### `appAuthorizationArn`<sup>Required</sup> <a name="appAuthorizationArn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appAuthorizationArn"></a>

```java
public java.lang.String getAppAuthorizationArn();
```

- *Type:* java.lang.String

---

##### `appBundleArn`<sup>Required</sup> <a name="appBundleArn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appBundleArn"></a>

```java
public java.lang.String getAppBundleArn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppfabricAppAuthorizationConnectionAuthRequest <a name="AppfabricAppAuthorizationConnectionAuthRequest" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization_connection.AppfabricAppAuthorizationConnectionAuthRequest;

AppfabricAppAuthorizationConnectionAuthRequest.builder()
    .code(java.lang.String)
    .redirectUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest.property.code">code</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/appfabric_app_authorization_connection#code AppfabricAppAuthorizationConnection#code}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest.property.redirectUri">redirectUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/appfabric_app_authorization_connection#redirect_uri AppfabricAppAuthorizationConnection#redirect_uri}. |

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/appfabric_app_authorization_connection#code AppfabricAppAuthorizationConnection#code}.

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest.property.redirectUri"></a>

```java
public java.lang.String getRedirectUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/appfabric_app_authorization_connection#redirect_uri AppfabricAppAuthorizationConnection#redirect_uri}.

---

### AppfabricAppAuthorizationConnectionConfig <a name="AppfabricAppAuthorizationConnectionConfig" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization_connection.AppfabricAppAuthorizationConnectionConfig;

AppfabricAppAuthorizationConnectionConfig.builder()
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
    .appAuthorizationArn(java.lang.String)
    .appBundleArn(java.lang.String)
//  .authRequest(IResolvable)
//  .authRequest(java.util.List<AppfabricAppAuthorizationConnectionAuthRequest>)
//  .region(java.lang.String)
//  .timeouts(AppfabricAppAuthorizationConnectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.appAuthorizationArn">appAuthorizationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/appfabric_app_authorization_connection#app_authorization_arn AppfabricAppAuthorizationConnection#app_authorization_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.appBundleArn">appBundleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/appfabric_app_authorization_connection#app_bundle_arn AppfabricAppAuthorizationConnection#app_bundle_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.authRequest">authRequest</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>></code> | auth_request block. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appAuthorizationArn`<sup>Required</sup> <a name="appAuthorizationArn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.appAuthorizationArn"></a>

```java
public java.lang.String getAppAuthorizationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/appfabric_app_authorization_connection#app_authorization_arn AppfabricAppAuthorizationConnection#app_authorization_arn}.

---

##### `appBundleArn`<sup>Required</sup> <a name="appBundleArn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.appBundleArn"></a>

```java
public java.lang.String getAppBundleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/appfabric_app_authorization_connection#app_bundle_arn AppfabricAppAuthorizationConnection#app_bundle_arn}.

---

##### `authRequest`<sup>Optional</sup> <a name="authRequest" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.authRequest"></a>

```java
public java.lang.Object getAuthRequest();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>>

auth_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/appfabric_app_authorization_connection#auth_request AppfabricAppAuthorizationConnection#auth_request}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/appfabric_app_authorization_connection#region AppfabricAppAuthorizationConnection#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.timeouts"></a>

```java
public AppfabricAppAuthorizationConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/appfabric_app_authorization_connection#timeouts AppfabricAppAuthorizationConnection#timeouts}

---

### AppfabricAppAuthorizationConnectionTenant <a name="AppfabricAppAuthorizationConnectionTenant" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenant.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization_connection.AppfabricAppAuthorizationConnectionTenant;

AppfabricAppAuthorizationConnectionTenant.builder()
    .build();
```


### AppfabricAppAuthorizationConnectionTimeouts <a name="AppfabricAppAuthorizationConnectionTimeouts" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization_connection.AppfabricAppAuthorizationConnectionTimeouts;

AppfabricAppAuthorizationConnectionTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/appfabric_app_authorization_connection#create AppfabricAppAuthorizationConnection#create}

---

## Classes <a name="Classes" id="Classes"></a>

### AppfabricAppAuthorizationConnectionAuthRequestList <a name="AppfabricAppAuthorizationConnectionAuthRequestList" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization_connection.AppfabricAppAuthorizationConnectionAuthRequestList;

new AppfabricAppAuthorizationConnectionAuthRequestList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.get"></a>

```java
public AppfabricAppAuthorizationConnectionAuthRequestOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>>

---


### AppfabricAppAuthorizationConnectionAuthRequestOutputReference <a name="AppfabricAppAuthorizationConnectionAuthRequestOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization_connection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference;

new AppfabricAppAuthorizationConnectionAuthRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.codeInput">codeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.redirectUriInput">redirectUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.redirectUri">redirectUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.codeInput"></a>

```java
public java.lang.String getCodeInput();
```

- *Type:* java.lang.String

---

##### `redirectUriInput`<sup>Optional</sup> <a name="redirectUriInput" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.redirectUriInput"></a>

```java
public java.lang.String getRedirectUriInput();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.redirectUri"></a>

```java
public java.lang.String getRedirectUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>

---


### AppfabricAppAuthorizationConnectionTenantList <a name="AppfabricAppAuthorizationConnectionTenantList" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization_connection.AppfabricAppAuthorizationConnectionTenantList;

new AppfabricAppAuthorizationConnectionTenantList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.get"></a>

```java
public AppfabricAppAuthorizationConnectionTenantOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AppfabricAppAuthorizationConnectionTenantOutputReference <a name="AppfabricAppAuthorizationConnectionTenantOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization_connection.AppfabricAppAuthorizationConnectionTenantOutputReference;

new AppfabricAppAuthorizationConnectionTenantOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.tenantDisplayName">tenantDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.tenantIdentifier">tenantIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenant">AppfabricAppAuthorizationConnectionTenant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tenantDisplayName`<sup>Required</sup> <a name="tenantDisplayName" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.tenantDisplayName"></a>

```java
public java.lang.String getTenantDisplayName();
```

- *Type:* java.lang.String

---

##### `tenantIdentifier`<sup>Required</sup> <a name="tenantIdentifier" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.tenantIdentifier"></a>

```java
public java.lang.String getTenantIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.internalValue"></a>

```java
public AppfabricAppAuthorizationConnectionTenant getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenant">AppfabricAppAuthorizationConnectionTenant</a>

---


### AppfabricAppAuthorizationConnectionTimeoutsOutputReference <a name="AppfabricAppAuthorizationConnectionTimeoutsOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_app_authorization_connection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference;

new AppfabricAppAuthorizationConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a>

---



