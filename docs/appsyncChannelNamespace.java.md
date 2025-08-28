# `appsyncChannelNamespace` Submodule <a name="`appsyncChannelNamespace` Submodule" id="@cdktf/provider-aws.appsyncChannelNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncChannelNamespace <a name="AppsyncChannelNamespace" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace aws_appsync_channel_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespace;

AppsyncChannelNamespace.Builder.create(Construct scope, java.lang.String id)
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
    .apiId(java.lang.String)
    .name(java.lang.String)
//  .codeHandlers(java.lang.String)
//  .handlerConfigs(IResolvable)
//  .handlerConfigs(java.util.List<AppsyncChannelNamespaceHandlerConfigs>)
//  .publishAuthMode(IResolvable)
//  .publishAuthMode(java.util.List<AppsyncChannelNamespacePublishAuthMode>)
//  .region(java.lang.String)
//  .subscribeAuthMode(IResolvable)
//  .subscribeAuthMode(java.util.List<AppsyncChannelNamespaceSubscribeAuthMode>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#api_id AppsyncChannelNamespace#api_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#name AppsyncChannelNamespace#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.codeHandlers">codeHandlers</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#code_handlers AppsyncChannelNamespace#code_handlers}. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.handlerConfigs">handlerConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a>></code> | handler_configs block. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.publishAuthMode">publishAuthMode</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthMode">AppsyncChannelNamespacePublishAuthMode</a>></code> | publish_auth_mode block. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.subscribeAuthMode">subscribeAuthMode</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthMode">AppsyncChannelNamespaceSubscribeAuthMode</a>></code> | subscribe_auth_mode block. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#tags AppsyncChannelNamespace#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.apiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#api_id AppsyncChannelNamespace#api_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#name AppsyncChannelNamespace#name}.

---

##### `codeHandlers`<sup>Optional</sup> <a name="codeHandlers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.codeHandlers"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#code_handlers AppsyncChannelNamespace#code_handlers}.

---

##### `handlerConfigs`<sup>Optional</sup> <a name="handlerConfigs" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.handlerConfigs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a>>

handler_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#handler_configs AppsyncChannelNamespace#handler_configs}

---

##### `publishAuthMode`<sup>Optional</sup> <a name="publishAuthMode" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.publishAuthMode"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthMode">AppsyncChannelNamespacePublishAuthMode</a>>

publish_auth_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#publish_auth_mode AppsyncChannelNamespace#publish_auth_mode}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#region AppsyncChannelNamespace#region}

---

##### `subscribeAuthMode`<sup>Optional</sup> <a name="subscribeAuthMode" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.subscribeAuthMode"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthMode">AppsyncChannelNamespaceSubscribeAuthMode</a>>

subscribe_auth_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#subscribe_auth_mode AppsyncChannelNamespace#subscribe_auth_mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#tags AppsyncChannelNamespace#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.putHandlerConfigs">putHandlerConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.putPublishAuthMode">putPublishAuthMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.putSubscribeAuthMode">putSubscribeAuthMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.resetCodeHandlers">resetCodeHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.resetHandlerConfigs">resetHandlerConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.resetPublishAuthMode">resetPublishAuthMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.resetSubscribeAuthMode">resetSubscribeAuthMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHandlerConfigs` <a name="putHandlerConfigs" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.putHandlerConfigs"></a>

```java
public void putHandlerConfigs(IResolvable OR java.util.List<AppsyncChannelNamespaceHandlerConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.putHandlerConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a>>

---

##### `putPublishAuthMode` <a name="putPublishAuthMode" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.putPublishAuthMode"></a>

```java
public void putPublishAuthMode(IResolvable OR java.util.List<AppsyncChannelNamespacePublishAuthMode> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.putPublishAuthMode.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthMode">AppsyncChannelNamespacePublishAuthMode</a>>

---

##### `putSubscribeAuthMode` <a name="putSubscribeAuthMode" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.putSubscribeAuthMode"></a>

```java
public void putSubscribeAuthMode(IResolvable OR java.util.List<AppsyncChannelNamespaceSubscribeAuthMode> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.putSubscribeAuthMode.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthMode">AppsyncChannelNamespaceSubscribeAuthMode</a>>

---

##### `resetCodeHandlers` <a name="resetCodeHandlers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.resetCodeHandlers"></a>

```java
public void resetCodeHandlers()
```

##### `resetHandlerConfigs` <a name="resetHandlerConfigs" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.resetHandlerConfigs"></a>

```java
public void resetHandlerConfigs()
```

##### `resetPublishAuthMode` <a name="resetPublishAuthMode" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.resetPublishAuthMode"></a>

```java
public void resetPublishAuthMode()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSubscribeAuthMode` <a name="resetSubscribeAuthMode" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.resetSubscribeAuthMode"></a>

```java
public void resetSubscribeAuthMode()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppsyncChannelNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespace;

AppsyncChannelNamespace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespace;

AppsyncChannelNamespace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespace;

AppsyncChannelNamespace.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespace;

AppsyncChannelNamespace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppsyncChannelNamespace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppsyncChannelNamespace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppsyncChannelNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppsyncChannelNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppsyncChannelNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.channelNamespaceArn">channelNamespaceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.handlerConfigs">handlerConfigs</a></code> | <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList">AppsyncChannelNamespaceHandlerConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.publishAuthMode">publishAuthMode</a></code> | <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList">AppsyncChannelNamespacePublishAuthModeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.subscribeAuthMode">subscribeAuthMode</a></code> | <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList">AppsyncChannelNamespaceSubscribeAuthModeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.apiIdInput">apiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.codeHandlersInput">codeHandlersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.handlerConfigsInput">handlerConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.publishAuthModeInput">publishAuthModeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthMode">AppsyncChannelNamespacePublishAuthMode</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.subscribeAuthModeInput">subscribeAuthModeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthMode">AppsyncChannelNamespaceSubscribeAuthMode</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.codeHandlers">codeHandlers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `channelNamespaceArn`<sup>Required</sup> <a name="channelNamespaceArn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.channelNamespaceArn"></a>

```java
public java.lang.String getChannelNamespaceArn();
```

- *Type:* java.lang.String

---

##### `handlerConfigs`<sup>Required</sup> <a name="handlerConfigs" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.handlerConfigs"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsList getHandlerConfigs();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList">AppsyncChannelNamespaceHandlerConfigsList</a>

---

##### `publishAuthMode`<sup>Required</sup> <a name="publishAuthMode" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.publishAuthMode"></a>

```java
public AppsyncChannelNamespacePublishAuthModeList getPublishAuthMode();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList">AppsyncChannelNamespacePublishAuthModeList</a>

---

##### `subscribeAuthMode`<sup>Required</sup> <a name="subscribeAuthMode" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.subscribeAuthMode"></a>

```java
public AppsyncChannelNamespaceSubscribeAuthModeList getSubscribeAuthMode();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList">AppsyncChannelNamespaceSubscribeAuthModeList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.apiIdInput"></a>

```java
public java.lang.String getApiIdInput();
```

- *Type:* java.lang.String

---

##### `codeHandlersInput`<sup>Optional</sup> <a name="codeHandlersInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.codeHandlersInput"></a>

```java
public java.lang.String getCodeHandlersInput();
```

- *Type:* java.lang.String

---

##### `handlerConfigsInput`<sup>Optional</sup> <a name="handlerConfigsInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.handlerConfigsInput"></a>

```java
public java.lang.Object getHandlerConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `publishAuthModeInput`<sup>Optional</sup> <a name="publishAuthModeInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.publishAuthModeInput"></a>

```java
public java.lang.Object getPublishAuthModeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthMode">AppsyncChannelNamespacePublishAuthMode</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `subscribeAuthModeInput`<sup>Optional</sup> <a name="subscribeAuthModeInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.subscribeAuthModeInput"></a>

```java
public java.lang.Object getSubscribeAuthModeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthMode">AppsyncChannelNamespaceSubscribeAuthMode</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `codeHandlers`<sup>Required</sup> <a name="codeHandlers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.codeHandlers"></a>

```java
public java.lang.String getCodeHandlers();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncChannelNamespaceConfig <a name="AppsyncChannelNamespaceConfig" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceConfig;

AppsyncChannelNamespaceConfig.builder()
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
    .apiId(java.lang.String)
    .name(java.lang.String)
//  .codeHandlers(java.lang.String)
//  .handlerConfigs(IResolvable)
//  .handlerConfigs(java.util.List<AppsyncChannelNamespaceHandlerConfigs>)
//  .publishAuthMode(IResolvable)
//  .publishAuthMode(java.util.List<AppsyncChannelNamespacePublishAuthMode>)
//  .region(java.lang.String)
//  .subscribeAuthMode(IResolvable)
//  .subscribeAuthMode(java.util.List<AppsyncChannelNamespaceSubscribeAuthMode>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#api_id AppsyncChannelNamespace#api_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#name AppsyncChannelNamespace#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.codeHandlers">codeHandlers</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#code_handlers AppsyncChannelNamespace#code_handlers}. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.handlerConfigs">handlerConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a>></code> | handler_configs block. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.publishAuthMode">publishAuthMode</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthMode">AppsyncChannelNamespacePublishAuthMode</a>></code> | publish_auth_mode block. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.subscribeAuthMode">subscribeAuthMode</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthMode">AppsyncChannelNamespaceSubscribeAuthMode</a>></code> | subscribe_auth_mode block. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#tags AppsyncChannelNamespace#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#api_id AppsyncChannelNamespace#api_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#name AppsyncChannelNamespace#name}.

---

##### `codeHandlers`<sup>Optional</sup> <a name="codeHandlers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.codeHandlers"></a>

```java
public java.lang.String getCodeHandlers();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#code_handlers AppsyncChannelNamespace#code_handlers}.

---

##### `handlerConfigs`<sup>Optional</sup> <a name="handlerConfigs" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.handlerConfigs"></a>

```java
public java.lang.Object getHandlerConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a>>

handler_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#handler_configs AppsyncChannelNamespace#handler_configs}

---

##### `publishAuthMode`<sup>Optional</sup> <a name="publishAuthMode" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.publishAuthMode"></a>

```java
public java.lang.Object getPublishAuthMode();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthMode">AppsyncChannelNamespacePublishAuthMode</a>>

publish_auth_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#publish_auth_mode AppsyncChannelNamespace#publish_auth_mode}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#region AppsyncChannelNamespace#region}

---

##### `subscribeAuthMode`<sup>Optional</sup> <a name="subscribeAuthMode" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.subscribeAuthMode"></a>

```java
public java.lang.Object getSubscribeAuthMode();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthMode">AppsyncChannelNamespaceSubscribeAuthMode</a>>

subscribe_auth_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#subscribe_auth_mode AppsyncChannelNamespace#subscribe_auth_mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#tags AppsyncChannelNamespace#tags}.

---

### AppsyncChannelNamespaceHandlerConfigs <a name="AppsyncChannelNamespaceHandlerConfigs" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigs;

AppsyncChannelNamespaceHandlerConfigs.builder()
//  .onPublish(IResolvable)
//  .onPublish(java.util.List<AppsyncChannelNamespaceHandlerConfigsOnPublish>)
//  .onSubscribe(IResolvable)
//  .onSubscribe(java.util.List<AppsyncChannelNamespaceHandlerConfigsOnSubscribe>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs.property.onPublish">onPublish</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a>></code> | on_publish block. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs.property.onSubscribe">onSubscribe</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a>></code> | on_subscribe block. |

---

##### `onPublish`<sup>Optional</sup> <a name="onPublish" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs.property.onPublish"></a>

```java
public java.lang.Object getOnPublish();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a>>

on_publish block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#on_publish AppsyncChannelNamespace#on_publish}

---

##### `onSubscribe`<sup>Optional</sup> <a name="onSubscribe" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs.property.onSubscribe"></a>

```java
public java.lang.Object getOnSubscribe();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a>>

on_subscribe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#on_subscribe AppsyncChannelNamespace#on_subscribe}

---

### AppsyncChannelNamespaceHandlerConfigsOnPublish <a name="AppsyncChannelNamespaceHandlerConfigsOnPublish" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnPublish;

AppsyncChannelNamespaceHandlerConfigsOnPublish.builder()
    .behavior(java.lang.String)
//  .integration(IResolvable)
//  .integration(java.util.List<AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish.property.behavior">behavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#behavior AppsyncChannelNamespace#behavior}. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish.property.integration">integration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a>></code> | integration block. |

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish.property.behavior"></a>

```java
public java.lang.String getBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#behavior AppsyncChannelNamespace#behavior}.

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish.property.integration"></a>

```java
public java.lang.Object getIntegration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a>>

integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#integration AppsyncChannelNamespace#integration}

---

### AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration <a name="AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration;

AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration.builder()
    .dataSourceName(java.lang.String)
//  .lambdaConfig(IResolvable)
//  .lambdaConfig(java.util.List<AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration.property.dataSourceName">dataSourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#data_source_name AppsyncChannelNamespace#data_source_name}. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration.property.lambdaConfig">lambdaConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a>></code> | lambda_config block. |

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration.property.dataSourceName"></a>

```java
public java.lang.String getDataSourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#data_source_name AppsyncChannelNamespace#data_source_name}.

---

##### `lambdaConfig`<sup>Optional</sup> <a name="lambdaConfig" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration.property.lambdaConfig"></a>

```java
public java.lang.Object getLambdaConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a>>

lambda_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#lambda_config AppsyncChannelNamespace#lambda_config}

---

### AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig <a name="AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig;

AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig.builder()
//  .invokeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig.property.invokeType">invokeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#invoke_type AppsyncChannelNamespace#invoke_type}. |

---

##### `invokeType`<sup>Optional</sup> <a name="invokeType" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig.property.invokeType"></a>

```java
public java.lang.String getInvokeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#invoke_type AppsyncChannelNamespace#invoke_type}.

---

### AppsyncChannelNamespaceHandlerConfigsOnSubscribe <a name="AppsyncChannelNamespaceHandlerConfigsOnSubscribe" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe;

AppsyncChannelNamespaceHandlerConfigsOnSubscribe.builder()
    .behavior(java.lang.String)
//  .integration(IResolvable)
//  .integration(java.util.List<AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe.property.behavior">behavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#behavior AppsyncChannelNamespace#behavior}. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe.property.integration">integration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a>></code> | integration block. |

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe.property.behavior"></a>

```java
public java.lang.String getBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#behavior AppsyncChannelNamespace#behavior}.

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe.property.integration"></a>

```java
public java.lang.Object getIntegration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a>>

integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#integration AppsyncChannelNamespace#integration}

---

### AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration <a name="AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration;

AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration.builder()
    .dataSourceName(java.lang.String)
//  .lambdaConfig(IResolvable)
//  .lambdaConfig(java.util.List<AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration.property.dataSourceName">dataSourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#data_source_name AppsyncChannelNamespace#data_source_name}. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration.property.lambdaConfig">lambdaConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a>></code> | lambda_config block. |

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration.property.dataSourceName"></a>

```java
public java.lang.String getDataSourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#data_source_name AppsyncChannelNamespace#data_source_name}.

---

##### `lambdaConfig`<sup>Optional</sup> <a name="lambdaConfig" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration.property.lambdaConfig"></a>

```java
public java.lang.Object getLambdaConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a>>

lambda_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#lambda_config AppsyncChannelNamespace#lambda_config}

---

### AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig <a name="AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig;

AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig.builder()
//  .invokeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig.property.invokeType">invokeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#invoke_type AppsyncChannelNamespace#invoke_type}. |

---

##### `invokeType`<sup>Optional</sup> <a name="invokeType" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig.property.invokeType"></a>

```java
public java.lang.String getInvokeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#invoke_type AppsyncChannelNamespace#invoke_type}.

---

### AppsyncChannelNamespacePublishAuthMode <a name="AppsyncChannelNamespacePublishAuthMode" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthMode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespacePublishAuthMode;

AppsyncChannelNamespacePublishAuthMode.builder()
    .authType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthMode.property.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#auth_type AppsyncChannelNamespace#auth_type}. |

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthMode.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#auth_type AppsyncChannelNamespace#auth_type}.

---

### AppsyncChannelNamespaceSubscribeAuthMode <a name="AppsyncChannelNamespaceSubscribeAuthMode" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthMode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceSubscribeAuthMode;

AppsyncChannelNamespaceSubscribeAuthMode.builder()
    .authType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthMode.property.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#auth_type AppsyncChannelNamespace#auth_type}. |

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthMode.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_channel_namespace#auth_type AppsyncChannelNamespace#auth_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncChannelNamespaceHandlerConfigsList <a name="AppsyncChannelNamespaceHandlerConfigsList" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsList;

new AppsyncChannelNamespaceHandlerConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.get"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a>>

---


### AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList <a name="AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList;

new AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.get"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a>>

---


### AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference <a name="AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference;

new AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resetInvokeType">resetInvokeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInvokeType` <a name="resetInvokeType" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.resetInvokeType"></a>

```java
public void resetInvokeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.invokeTypeInput">invokeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.invokeType">invokeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `invokeTypeInput`<sup>Optional</sup> <a name="invokeTypeInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.invokeTypeInput"></a>

```java
public java.lang.String getInvokeTypeInput();
```

- *Type:* java.lang.String

---

##### `invokeType`<sup>Required</sup> <a name="invokeType" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.invokeType"></a>

```java
public java.lang.String getInvokeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a>

---


### AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList <a name="AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList;

new AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.get"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a>>

---


### AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference <a name="AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference;

new AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.putLambdaConfig">putLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resetLambdaConfig">resetLambdaConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaConfig` <a name="putLambdaConfig" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.putLambdaConfig"></a>

```java
public void putLambdaConfig(IResolvable OR java.util.List<AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.putLambdaConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a>>

---

##### `resetLambdaConfig` <a name="resetLambdaConfig" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.resetLambdaConfig"></a>

```java
public void resetLambdaConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.dataSourceNameInput">dataSourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.lambdaConfigInput">lambdaConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.dataSourceName">dataSourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaConfig`<sup>Required</sup> <a name="lambdaConfig" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.lambdaConfig"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList getLambdaConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigList</a>

---

##### `dataSourceNameInput`<sup>Optional</sup> <a name="dataSourceNameInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.dataSourceNameInput"></a>

```java
public java.lang.String getDataSourceNameInput();
```

- *Type:* java.lang.String

---

##### `lambdaConfigInput`<sup>Optional</sup> <a name="lambdaConfigInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.lambdaConfigInput"></a>

```java
public java.lang.Object getLambdaConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig</a>>

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.dataSourceName"></a>

```java
public java.lang.String getDataSourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a>

---


### AppsyncChannelNamespaceHandlerConfigsOnPublishList <a name="AppsyncChannelNamespaceHandlerConfigsOnPublishList" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList;

new AppsyncChannelNamespaceHandlerConfigsOnPublishList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.get"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a>>

---


### AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference <a name="AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference;

new AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.putIntegration">putIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resetIntegration">resetIntegration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIntegration` <a name="putIntegration" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.putIntegration"></a>

```java
public void putIntegration(IResolvable OR java.util.List<AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.putIntegration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a>>

---

##### `resetIntegration` <a name="resetIntegration" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.resetIntegration"></a>

```java
public void resetIntegration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.integration">integration</a></code> | <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.integrationInput">integrationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.behavior">behavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.integration"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList getIntegration();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationList</a>

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.behaviorInput"></a>

```java
public java.lang.String getBehaviorInput();
```

- *Type:* java.lang.String

---

##### `integrationInput`<sup>Optional</sup> <a name="integrationInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.integrationInput"></a>

```java
public java.lang.Object getIntegrationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration">AppsyncChannelNamespaceHandlerConfigsOnPublishIntegration</a>>

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.behavior"></a>

```java
public java.lang.String getBehavior();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a>

---


### AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList <a name="AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList;

new AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.get"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a>>

---


### AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference <a name="AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference;

new AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resetInvokeType">resetInvokeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInvokeType` <a name="resetInvokeType" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.resetInvokeType"></a>

```java
public void resetInvokeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.invokeTypeInput">invokeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.invokeType">invokeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `invokeTypeInput`<sup>Optional</sup> <a name="invokeTypeInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.invokeTypeInput"></a>

```java
public java.lang.String getInvokeTypeInput();
```

- *Type:* java.lang.String

---

##### `invokeType`<sup>Required</sup> <a name="invokeType" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.invokeType"></a>

```java
public java.lang.String getInvokeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a>

---


### AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList <a name="AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList;

new AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.get"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a>>

---


### AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference <a name="AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference;

new AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.putLambdaConfig">putLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resetLambdaConfig">resetLambdaConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaConfig` <a name="putLambdaConfig" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.putLambdaConfig"></a>

```java
public void putLambdaConfig(IResolvable OR java.util.List<AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.putLambdaConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a>>

---

##### `resetLambdaConfig` <a name="resetLambdaConfig" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.resetLambdaConfig"></a>

```java
public void resetLambdaConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.dataSourceNameInput">dataSourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.lambdaConfigInput">lambdaConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.dataSourceName">dataSourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaConfig`<sup>Required</sup> <a name="lambdaConfig" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.lambdaConfig"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList getLambdaConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigList</a>

---

##### `dataSourceNameInput`<sup>Optional</sup> <a name="dataSourceNameInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.dataSourceNameInput"></a>

```java
public java.lang.String getDataSourceNameInput();
```

- *Type:* java.lang.String

---

##### `lambdaConfigInput`<sup>Optional</sup> <a name="lambdaConfigInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.lambdaConfigInput"></a>

```java
public java.lang.Object getLambdaConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig</a>>

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.dataSourceName"></a>

```java
public java.lang.String getDataSourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a>

---


### AppsyncChannelNamespaceHandlerConfigsOnSubscribeList <a name="AppsyncChannelNamespaceHandlerConfigsOnSubscribeList" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList;

new AppsyncChannelNamespaceHandlerConfigsOnSubscribeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.get"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a>>

---


### AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference <a name="AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference;

new AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.putIntegration">putIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resetIntegration">resetIntegration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIntegration` <a name="putIntegration" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.putIntegration"></a>

```java
public void putIntegration(IResolvable OR java.util.List<AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.putIntegration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a>>

---

##### `resetIntegration` <a name="resetIntegration" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.resetIntegration"></a>

```java
public void resetIntegration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.integration">integration</a></code> | <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.integrationInput">integrationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.behavior">behavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.integration"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList getIntegration();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationList</a>

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.behaviorInput"></a>

```java
public java.lang.String getBehaviorInput();
```

- *Type:* java.lang.String

---

##### `integrationInput`<sup>Optional</sup> <a name="integrationInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.integrationInput"></a>

```java
public java.lang.Object getIntegrationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration">AppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration</a>>

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.behavior"></a>

```java
public java.lang.String getBehavior();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a>

---


### AppsyncChannelNamespaceHandlerConfigsOutputReference <a name="AppsyncChannelNamespaceHandlerConfigsOutputReference" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceHandlerConfigsOutputReference;

new AppsyncChannelNamespaceHandlerConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.putOnPublish">putOnPublish</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.putOnSubscribe">putOnSubscribe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.resetOnPublish">resetOnPublish</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.resetOnSubscribe">resetOnSubscribe</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnPublish` <a name="putOnPublish" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.putOnPublish"></a>

```java
public void putOnPublish(IResolvable OR java.util.List<AppsyncChannelNamespaceHandlerConfigsOnPublish> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.putOnPublish.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a>>

---

##### `putOnSubscribe` <a name="putOnSubscribe" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.putOnSubscribe"></a>

```java
public void putOnSubscribe(IResolvable OR java.util.List<AppsyncChannelNamespaceHandlerConfigsOnSubscribe> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.putOnSubscribe.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a>>

---

##### `resetOnPublish` <a name="resetOnPublish" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.resetOnPublish"></a>

```java
public void resetOnPublish()
```

##### `resetOnSubscribe` <a name="resetOnSubscribe" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.resetOnSubscribe"></a>

```java
public void resetOnSubscribe()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onPublish">onPublish</a></code> | <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList">AppsyncChannelNamespaceHandlerConfigsOnPublishList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onSubscribe">onSubscribe</a></code> | <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList">AppsyncChannelNamespaceHandlerConfigsOnSubscribeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onPublishInput">onPublishInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onSubscribeInput">onSubscribeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onPublish`<sup>Required</sup> <a name="onPublish" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onPublish"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnPublishList getOnPublish();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublishList">AppsyncChannelNamespaceHandlerConfigsOnPublishList</a>

---

##### `onSubscribe`<sup>Required</sup> <a name="onSubscribe" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onSubscribe"></a>

```java
public AppsyncChannelNamespaceHandlerConfigsOnSubscribeList getOnSubscribe();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribeList">AppsyncChannelNamespaceHandlerConfigsOnSubscribeList</a>

---

##### `onPublishInput`<sup>Optional</sup> <a name="onPublishInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onPublishInput"></a>

```java
public java.lang.Object getOnPublishInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnPublish">AppsyncChannelNamespaceHandlerConfigsOnPublish</a>>

---

##### `onSubscribeInput`<sup>Optional</sup> <a name="onSubscribeInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.onSubscribeInput"></a>

```java
public java.lang.Object getOnSubscribeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOnSubscribe">AppsyncChannelNamespaceHandlerConfigsOnSubscribe</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceHandlerConfigs">AppsyncChannelNamespaceHandlerConfigs</a>

---


### AppsyncChannelNamespacePublishAuthModeList <a name="AppsyncChannelNamespacePublishAuthModeList" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespacePublishAuthModeList;

new AppsyncChannelNamespacePublishAuthModeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.get"></a>

```java
public AppsyncChannelNamespacePublishAuthModeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthMode">AppsyncChannelNamespacePublishAuthMode</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthMode">AppsyncChannelNamespacePublishAuthMode</a>>

---


### AppsyncChannelNamespacePublishAuthModeOutputReference <a name="AppsyncChannelNamespacePublishAuthModeOutputReference" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespacePublishAuthModeOutputReference;

new AppsyncChannelNamespacePublishAuthModeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthMode">AppsyncChannelNamespacePublishAuthMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthModeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespacePublishAuthMode">AppsyncChannelNamespacePublishAuthMode</a>

---


### AppsyncChannelNamespaceSubscribeAuthModeList <a name="AppsyncChannelNamespaceSubscribeAuthModeList" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceSubscribeAuthModeList;

new AppsyncChannelNamespaceSubscribeAuthModeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.get"></a>

```java
public AppsyncChannelNamespaceSubscribeAuthModeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthMode">AppsyncChannelNamespaceSubscribeAuthMode</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthMode">AppsyncChannelNamespaceSubscribeAuthMode</a>>

---


### AppsyncChannelNamespaceSubscribeAuthModeOutputReference <a name="AppsyncChannelNamespaceSubscribeAuthModeOutputReference" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_channel_namespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference;

new AppsyncChannelNamespaceSubscribeAuthModeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthMode">AppsyncChannelNamespaceSubscribeAuthMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthModeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncChannelNamespace.AppsyncChannelNamespaceSubscribeAuthMode">AppsyncChannelNamespaceSubscribeAuthMode</a>

---



