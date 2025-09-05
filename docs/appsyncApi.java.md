# `appsyncApi` Submodule <a name="`appsyncApi` Submodule" id="@cdktf/provider-aws.appsyncApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncApi <a name="AppsyncApi" id="@cdktf/provider-aws.appsyncApi.AppsyncApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api aws_appsync_api}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApi;

AppsyncApi.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .eventConfig(IResolvable)
//  .eventConfig(java.util.List<AppsyncApiEventConfig>)
//  .ownerContact(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#name AppsyncApi#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.eventConfig">eventConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>></code> | event_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.ownerContact">ownerContact</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#owner_contact AppsyncApi#owner_contact}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#tags AppsyncApi#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#name AppsyncApi#name}.

---

##### `eventConfig`<sup>Optional</sup> <a name="eventConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.eventConfig"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>>

event_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#event_config AppsyncApi#event_config}

---

##### `ownerContact`<sup>Optional</sup> <a name="ownerContact" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.ownerContact"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#owner_contact AppsyncApi#owner_contact}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#region AppsyncApi#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#tags AppsyncApi#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.putEventConfig">putEventConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.resetEventConfig">resetEventConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.resetOwnerContact">resetOwnerContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEventConfig` <a name="putEventConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.putEventConfig"></a>

```java
public void putEventConfig(IResolvable OR java.util.List<AppsyncApiEventConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.putEventConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>>

---

##### `resetEventConfig` <a name="resetEventConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.resetEventConfig"></a>

```java
public void resetEventConfig()
```

##### `resetOwnerContact` <a name="resetOwnerContact" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.resetOwnerContact"></a>

```java
public void resetOwnerContact()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppsyncApi resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApi;

AppsyncApi.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApi;

AppsyncApi.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApi;

AppsyncApi.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApi;

AppsyncApi.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppsyncApi.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppsyncApi resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppsyncApi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppsyncApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppsyncApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.apiArn">apiArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.dns">dns</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.eventConfig">eventConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList">AppsyncApiEventConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.wafWebAclArn">wafWebAclArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.xrayEnabled">xrayEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.eventConfigInput">eventConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.ownerContactInput">ownerContactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.ownerContact">ownerContact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiArn`<sup>Required</sup> <a name="apiArn" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.apiArn"></a>

```java
public java.lang.String getApiArn();
```

- *Type:* java.lang.String

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.dns"></a>

```java
public StringMap getDns();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `eventConfig`<sup>Required</sup> <a name="eventConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.eventConfig"></a>

```java
public AppsyncApiEventConfigList getEventConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList">AppsyncApiEventConfigList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `wafWebAclArn`<sup>Required</sup> <a name="wafWebAclArn" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.wafWebAclArn"></a>

```java
public java.lang.String getWafWebAclArn();
```

- *Type:* java.lang.String

---

##### `xrayEnabled`<sup>Required</sup> <a name="xrayEnabled" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.xrayEnabled"></a>

```java
public IResolvable getXrayEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `eventConfigInput`<sup>Optional</sup> <a name="eventConfigInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.eventConfigInput"></a>

```java
public java.lang.Object getEventConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerContactInput`<sup>Optional</sup> <a name="ownerContactInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.ownerContactInput"></a>

```java
public java.lang.String getOwnerContactInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ownerContact`<sup>Required</sup> <a name="ownerContact" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.ownerContact"></a>

```java
public java.lang.String getOwnerContact();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncApiConfig <a name="AppsyncApiConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiConfig;

AppsyncApiConfig.builder()
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
    .name(java.lang.String)
//  .eventConfig(IResolvable)
//  .eventConfig(java.util.List<AppsyncApiEventConfig>)
//  .ownerContact(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#name AppsyncApi#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.eventConfig">eventConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>></code> | event_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.ownerContact">ownerContact</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#owner_contact AppsyncApi#owner_contact}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#tags AppsyncApi#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#name AppsyncApi#name}.

---

##### `eventConfig`<sup>Optional</sup> <a name="eventConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.eventConfig"></a>

```java
public java.lang.Object getEventConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>>

event_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#event_config AppsyncApi#event_config}

---

##### `ownerContact`<sup>Optional</sup> <a name="ownerContact" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.ownerContact"></a>

```java
public java.lang.String getOwnerContact();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#owner_contact AppsyncApi#owner_contact}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#region AppsyncApi#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#tags AppsyncApi#tags}.

---

### AppsyncApiEventConfig <a name="AppsyncApiEventConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfig;

AppsyncApiEventConfig.builder()
//  .authProvider(IResolvable)
//  .authProvider(java.util.List<AppsyncApiEventConfigAuthProvider>)
//  .connectionAuthMode(IResolvable)
//  .connectionAuthMode(java.util.List<AppsyncApiEventConfigConnectionAuthMode>)
//  .defaultPublishAuthMode(IResolvable)
//  .defaultPublishAuthMode(java.util.List<AppsyncApiEventConfigDefaultPublishAuthMode>)
//  .defaultSubscribeAuthMode(IResolvable)
//  .defaultSubscribeAuthMode(java.util.List<AppsyncApiEventConfigDefaultSubscribeAuthMode>)
//  .logConfig(IResolvable)
//  .logConfig(java.util.List<AppsyncApiEventConfigLogConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.property.authProvider">authProvider</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider">AppsyncApiEventConfigAuthProvider</a>></code> | auth_provider block. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.property.connectionAuthMode">connectionAuthMode</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode">AppsyncApiEventConfigConnectionAuthMode</a>></code> | connection_auth_mode block. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.property.defaultPublishAuthMode">defaultPublishAuthMode</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode">AppsyncApiEventConfigDefaultPublishAuthMode</a>></code> | default_publish_auth_mode block. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.property.defaultSubscribeAuthMode">defaultSubscribeAuthMode</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode">AppsyncApiEventConfigDefaultSubscribeAuthMode</a>></code> | default_subscribe_auth_mode block. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.property.logConfig">logConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>></code> | log_config block. |

---

##### `authProvider`<sup>Optional</sup> <a name="authProvider" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.property.authProvider"></a>

```java
public java.lang.Object getAuthProvider();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider">AppsyncApiEventConfigAuthProvider</a>>

auth_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#auth_provider AppsyncApi#auth_provider}

---

##### `connectionAuthMode`<sup>Optional</sup> <a name="connectionAuthMode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.property.connectionAuthMode"></a>

```java
public java.lang.Object getConnectionAuthMode();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode">AppsyncApiEventConfigConnectionAuthMode</a>>

connection_auth_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#connection_auth_mode AppsyncApi#connection_auth_mode}

---

##### `defaultPublishAuthMode`<sup>Optional</sup> <a name="defaultPublishAuthMode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.property.defaultPublishAuthMode"></a>

```java
public java.lang.Object getDefaultPublishAuthMode();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode">AppsyncApiEventConfigDefaultPublishAuthMode</a>>

default_publish_auth_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#default_publish_auth_mode AppsyncApi#default_publish_auth_mode}

---

##### `defaultSubscribeAuthMode`<sup>Optional</sup> <a name="defaultSubscribeAuthMode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.property.defaultSubscribeAuthMode"></a>

```java
public java.lang.Object getDefaultSubscribeAuthMode();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode">AppsyncApiEventConfigDefaultSubscribeAuthMode</a>>

default_subscribe_auth_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#default_subscribe_auth_mode AppsyncApi#default_subscribe_auth_mode}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.property.logConfig"></a>

```java
public java.lang.Object getLogConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#log_config AppsyncApi#log_config}

---

### AppsyncApiEventConfigAuthProvider <a name="AppsyncApiEventConfigAuthProvider" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigAuthProvider;

AppsyncApiEventConfigAuthProvider.builder()
    .authType(java.lang.String)
//  .cognitoConfig(IResolvable)
//  .cognitoConfig(java.util.List<AppsyncApiEventConfigAuthProviderCognitoConfig>)
//  .lambdaAuthorizerConfig(IResolvable)
//  .lambdaAuthorizerConfig(java.util.List<AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig>)
//  .openidConnectConfig(IResolvable)
//  .openidConnectConfig(java.util.List<AppsyncApiEventConfigAuthProviderOpenidConnectConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider.property.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider.property.cognitoConfig">cognitoConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig">AppsyncApiEventConfigAuthProviderCognitoConfig</a>></code> | cognito_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider.property.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig</a>></code> | lambda_authorizer_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider.property.openidConnectConfig">openidConnectConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig">AppsyncApiEventConfigAuthProviderOpenidConnectConfig</a>></code> | openid_connect_config block. |

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}.

---

##### `cognitoConfig`<sup>Optional</sup> <a name="cognitoConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider.property.cognitoConfig"></a>

```java
public java.lang.Object getCognitoConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig">AppsyncApiEventConfigAuthProviderCognitoConfig</a>>

cognito_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#cognito_config AppsyncApi#cognito_config}

---

##### `lambdaAuthorizerConfig`<sup>Optional</sup> <a name="lambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider.property.lambdaAuthorizerConfig"></a>

```java
public java.lang.Object getLambdaAuthorizerConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig</a>>

lambda_authorizer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#lambda_authorizer_config AppsyncApi#lambda_authorizer_config}

---

##### `openidConnectConfig`<sup>Optional</sup> <a name="openidConnectConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider.property.openidConnectConfig"></a>

```java
public java.lang.Object getOpenidConnectConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig">AppsyncApiEventConfigAuthProviderOpenidConnectConfig</a>>

openid_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#openid_connect_config AppsyncApi#openid_connect_config}

---

### AppsyncApiEventConfigAuthProviderCognitoConfig <a name="AppsyncApiEventConfigAuthProviderCognitoConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigAuthProviderCognitoConfig;

AppsyncApiEventConfigAuthProviderCognitoConfig.builder()
    .awsRegion(java.lang.String)
    .userPoolId(java.lang.String)
//  .appIdClientRegex(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#aws_region AppsyncApi#aws_region}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#user_pool_id AppsyncApi#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig.property.appIdClientRegex">appIdClientRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#app_id_client_regex AppsyncApi#app_id_client_regex}. |

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#aws_region AppsyncApi#aws_region}.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#user_pool_id AppsyncApi#user_pool_id}.

---

##### `appIdClientRegex`<sup>Optional</sup> <a name="appIdClientRegex" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig.property.appIdClientRegex"></a>

```java
public java.lang.String getAppIdClientRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#app_id_client_regex AppsyncApi#app_id_client_regex}.

---

### AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig <a name="AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig;

AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig.builder()
    .authorizerUri(java.lang.String)
//  .authorizerResultTtlInSeconds(java.lang.Number)
//  .identityValidationExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig.property.authorizerUri">authorizerUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#authorizer_uri AppsyncApi#authorizer_uri}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#authorizer_result_ttl_in_seconds AppsyncApi#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig.property.identityValidationExpression">identityValidationExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#identity_validation_expression AppsyncApi#identity_validation_expression}. |

---

##### `authorizerUri`<sup>Required</sup> <a name="authorizerUri" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig.property.authorizerUri"></a>

```java
public java.lang.String getAuthorizerUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#authorizer_uri AppsyncApi#authorizer_uri}.

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="authorizerResultTtlInSeconds" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#authorizer_result_ttl_in_seconds AppsyncApi#authorizer_result_ttl_in_seconds}.

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="identityValidationExpression" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```java
public java.lang.String getIdentityValidationExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#identity_validation_expression AppsyncApi#identity_validation_expression}.

---

### AppsyncApiEventConfigAuthProviderOpenidConnectConfig <a name="AppsyncApiEventConfigAuthProviderOpenidConnectConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigAuthProviderOpenidConnectConfig;

AppsyncApiEventConfigAuthProviderOpenidConnectConfig.builder()
    .issuer(java.lang.String)
//  .authTtl(java.lang.Number)
//  .clientId(java.lang.String)
//  .iatTtl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#issuer AppsyncApi#issuer}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig.property.authTtl">authTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#auth_ttl AppsyncApi#auth_ttl}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#client_id AppsyncApi#client_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig.property.iatTtl">iatTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#iat_ttl AppsyncApi#iat_ttl}. |

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#issuer AppsyncApi#issuer}.

---

##### `authTtl`<sup>Optional</sup> <a name="authTtl" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig.property.authTtl"></a>

```java
public java.lang.Number getAuthTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#auth_ttl AppsyncApi#auth_ttl}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#client_id AppsyncApi#client_id}.

---

##### `iatTtl`<sup>Optional</sup> <a name="iatTtl" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig.property.iatTtl"></a>

```java
public java.lang.Number getIatTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#iat_ttl AppsyncApi#iat_ttl}.

---

### AppsyncApiEventConfigConnectionAuthMode <a name="AppsyncApiEventConfigConnectionAuthMode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigConnectionAuthMode;

AppsyncApiEventConfigConnectionAuthMode.builder()
    .authType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode.property.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}. |

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}.

---

### AppsyncApiEventConfigDefaultPublishAuthMode <a name="AppsyncApiEventConfigDefaultPublishAuthMode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigDefaultPublishAuthMode;

AppsyncApiEventConfigDefaultPublishAuthMode.builder()
    .authType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode.property.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}. |

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}.

---

### AppsyncApiEventConfigDefaultSubscribeAuthMode <a name="AppsyncApiEventConfigDefaultSubscribeAuthMode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigDefaultSubscribeAuthMode;

AppsyncApiEventConfigDefaultSubscribeAuthMode.builder()
    .authType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode.property.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}. |

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}.

---

### AppsyncApiEventConfigLogConfig <a name="AppsyncApiEventConfigLogConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigLogConfig;

AppsyncApiEventConfigLogConfig.builder()
    .cloudwatchLogsRoleArn(java.lang.String)
    .logLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig.property.cloudwatchLogsRoleArn">cloudwatchLogsRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#cloudwatch_logs_role_arn AppsyncApi#cloudwatch_logs_role_arn}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#log_level AppsyncApi#log_level}. |

---

##### `cloudwatchLogsRoleArn`<sup>Required</sup> <a name="cloudwatchLogsRoleArn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig.property.cloudwatchLogsRoleArn"></a>

```java
public java.lang.String getCloudwatchLogsRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#cloudwatch_logs_role_arn AppsyncApi#cloudwatch_logs_role_arn}.

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/appsync_api#log_level AppsyncApi#log_level}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncApiEventConfigAuthProviderCognitoConfigList <a name="AppsyncApiEventConfigAuthProviderCognitoConfigList" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigAuthProviderCognitoConfigList;

new AppsyncApiEventConfigAuthProviderCognitoConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.get"></a>

```java
public AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig">AppsyncApiEventConfigAuthProviderCognitoConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig">AppsyncApiEventConfigAuthProviderCognitoConfig</a>>

---


### AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference <a name="AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference;

new AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.resetAppIdClientRegex">resetAppIdClientRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppIdClientRegex` <a name="resetAppIdClientRegex" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.resetAppIdClientRegex"></a>

```java
public void resetAppIdClientRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.appIdClientRegexInput">appIdClientRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.userPoolIdInput">userPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.appIdClientRegex">appIdClientRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig">AppsyncApiEventConfigAuthProviderCognitoConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appIdClientRegexInput`<sup>Optional</sup> <a name="appIdClientRegexInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.appIdClientRegexInput"></a>

```java
public java.lang.String getAppIdClientRegexInput();
```

- *Type:* java.lang.String

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.awsRegionInput"></a>

```java
public java.lang.String getAwsRegionInput();
```

- *Type:* java.lang.String

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.userPoolIdInput"></a>

```java
public java.lang.String getUserPoolIdInput();
```

- *Type:* java.lang.String

---

##### `appIdClientRegex`<sup>Required</sup> <a name="appIdClientRegex" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.appIdClientRegex"></a>

```java
public java.lang.String getAppIdClientRegex();
```

- *Type:* java.lang.String

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig">AppsyncApiEventConfigAuthProviderCognitoConfig</a>

---


### AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList <a name="AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList;

new AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.get"></a>

```java
public AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig</a>>

---


### AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference <a name="AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference;

new AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">resetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">resetIdentityValidationExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizerResultTtlInSeconds` <a name="resetAuthorizerResultTtlInSeconds" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```java
public void resetAuthorizerResultTtlInSeconds()
```

##### `resetIdentityValidationExpression` <a name="resetIdentityValidationExpression" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```java
public void resetIdentityValidationExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">authorizerResultTtlInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">authorizerUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">identityValidationExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.authorizerUri">authorizerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">identityValidationExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="authorizerResultTtlInSecondsInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `authorizerUriInput`<sup>Optional</sup> <a name="authorizerUriInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```java
public java.lang.String getAuthorizerUriInput();
```

- *Type:* java.lang.String

---

##### `identityValidationExpressionInput`<sup>Optional</sup> <a name="identityValidationExpressionInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```java
public java.lang.String getIdentityValidationExpressionInput();
```

- *Type:* java.lang.String

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="authorizerResultTtlInSeconds" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSeconds();
```

- *Type:* java.lang.Number

---

##### `authorizerUri`<sup>Required</sup> <a name="authorizerUri" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```java
public java.lang.String getAuthorizerUri();
```

- *Type:* java.lang.String

---

##### `identityValidationExpression`<sup>Required</sup> <a name="identityValidationExpression" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```java
public java.lang.String getIdentityValidationExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig</a>

---


### AppsyncApiEventConfigAuthProviderList <a name="AppsyncApiEventConfigAuthProviderList" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigAuthProviderList;

new AppsyncApiEventConfigAuthProviderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.get"></a>

```java
public AppsyncApiEventConfigAuthProviderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider">AppsyncApiEventConfigAuthProvider</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider">AppsyncApiEventConfigAuthProvider</a>>

---


### AppsyncApiEventConfigAuthProviderOpenidConnectConfigList <a name="AppsyncApiEventConfigAuthProviderOpenidConnectConfigList" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList;

new AppsyncApiEventConfigAuthProviderOpenidConnectConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.get"></a>

```java
public AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig">AppsyncApiEventConfigAuthProviderOpenidConnectConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig">AppsyncApiEventConfigAuthProviderOpenidConnectConfig</a>>

---


### AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference <a name="AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference;

new AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.resetAuthTtl">resetAuthTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.resetIatTtl">resetIatTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthTtl` <a name="resetAuthTtl" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.resetAuthTtl"></a>

```java
public void resetAuthTtl()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetIatTtl` <a name="resetIatTtl" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.resetIatTtl"></a>

```java
public void resetIatTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.authTtlInput">authTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.iatTtlInput">iatTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.authTtl">authTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.iatTtl">iatTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig">AppsyncApiEventConfigAuthProviderOpenidConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authTtlInput`<sup>Optional</sup> <a name="authTtlInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.authTtlInput"></a>

```java
public java.lang.Number getAuthTtlInput();
```

- *Type:* java.lang.Number

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `iatTtlInput`<sup>Optional</sup> <a name="iatTtlInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.iatTtlInput"></a>

```java
public java.lang.Number getIatTtlInput();
```

- *Type:* java.lang.Number

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `authTtl`<sup>Required</sup> <a name="authTtl" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.authTtl"></a>

```java
public java.lang.Number getAuthTtl();
```

- *Type:* java.lang.Number

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `iatTtl`<sup>Required</sup> <a name="iatTtl" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.iatTtl"></a>

```java
public java.lang.Number getIatTtl();
```

- *Type:* java.lang.Number

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig">AppsyncApiEventConfigAuthProviderOpenidConnectConfig</a>

---


### AppsyncApiEventConfigAuthProviderOutputReference <a name="AppsyncApiEventConfigAuthProviderOutputReference" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigAuthProviderOutputReference;

new AppsyncApiEventConfigAuthProviderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.putCognitoConfig">putCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.putLambdaAuthorizerConfig">putLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.putOpenidConnectConfig">putOpenidConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.resetCognitoConfig">resetCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.resetLambdaAuthorizerConfig">resetLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.resetOpenidConnectConfig">resetOpenidConnectConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCognitoConfig` <a name="putCognitoConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.putCognitoConfig"></a>

```java
public void putCognitoConfig(IResolvable OR java.util.List<AppsyncApiEventConfigAuthProviderCognitoConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.putCognitoConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig">AppsyncApiEventConfigAuthProviderCognitoConfig</a>>

---

##### `putLambdaAuthorizerConfig` <a name="putLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.putLambdaAuthorizerConfig"></a>

```java
public void putLambdaAuthorizerConfig(IResolvable OR java.util.List<AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.putLambdaAuthorizerConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig</a>>

---

##### `putOpenidConnectConfig` <a name="putOpenidConnectConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.putOpenidConnectConfig"></a>

```java
public void putOpenidConnectConfig(IResolvable OR java.util.List<AppsyncApiEventConfigAuthProviderOpenidConnectConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.putOpenidConnectConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig">AppsyncApiEventConfigAuthProviderOpenidConnectConfig</a>>

---

##### `resetCognitoConfig` <a name="resetCognitoConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.resetCognitoConfig"></a>

```java
public void resetCognitoConfig()
```

##### `resetLambdaAuthorizerConfig` <a name="resetLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.resetLambdaAuthorizerConfig"></a>

```java
public void resetLambdaAuthorizerConfig()
```

##### `resetOpenidConnectConfig` <a name="resetOpenidConnectConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.resetOpenidConnectConfig"></a>

```java
public void resetOpenidConnectConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.cognitoConfig">cognitoConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList">AppsyncApiEventConfigAuthProviderCognitoConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.lambdaAuthorizerConfig">lambdaAuthorizerConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.openidConnectConfig">openidConnectConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList">AppsyncApiEventConfigAuthProviderOpenidConnectConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.cognitoConfigInput">cognitoConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig">AppsyncApiEventConfigAuthProviderCognitoConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.lambdaAuthorizerConfigInput">lambdaAuthorizerConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.openidConnectConfigInput">openidConnectConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig">AppsyncApiEventConfigAuthProviderOpenidConnectConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider">AppsyncApiEventConfigAuthProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cognitoConfig`<sup>Required</sup> <a name="cognitoConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.cognitoConfig"></a>

```java
public AppsyncApiEventConfigAuthProviderCognitoConfigList getCognitoConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList">AppsyncApiEventConfigAuthProviderCognitoConfigList</a>

---

##### `lambdaAuthorizerConfig`<sup>Required</sup> <a name="lambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.lambdaAuthorizerConfig"></a>

```java
public AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList getLambdaAuthorizerConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList</a>

---

##### `openidConnectConfig`<sup>Required</sup> <a name="openidConnectConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.openidConnectConfig"></a>

```java
public AppsyncApiEventConfigAuthProviderOpenidConnectConfigList getOpenidConnectConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList">AppsyncApiEventConfigAuthProviderOpenidConnectConfigList</a>

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `cognitoConfigInput`<sup>Optional</sup> <a name="cognitoConfigInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.cognitoConfigInput"></a>

```java
public java.lang.Object getCognitoConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig">AppsyncApiEventConfigAuthProviderCognitoConfig</a>>

---

##### `lambdaAuthorizerConfigInput`<sup>Optional</sup> <a name="lambdaAuthorizerConfigInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.lambdaAuthorizerConfigInput"></a>

```java
public java.lang.Object getLambdaAuthorizerConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig</a>>

---

##### `openidConnectConfigInput`<sup>Optional</sup> <a name="openidConnectConfigInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.openidConnectConfigInput"></a>

```java
public java.lang.Object getOpenidConnectConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig">AppsyncApiEventConfigAuthProviderOpenidConnectConfig</a>>

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider">AppsyncApiEventConfigAuthProvider</a>

---


### AppsyncApiEventConfigConnectionAuthModeList <a name="AppsyncApiEventConfigConnectionAuthModeList" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigConnectionAuthModeList;

new AppsyncApiEventConfigConnectionAuthModeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.get"></a>

```java
public AppsyncApiEventConfigConnectionAuthModeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode">AppsyncApiEventConfigConnectionAuthMode</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode">AppsyncApiEventConfigConnectionAuthMode</a>>

---


### AppsyncApiEventConfigConnectionAuthModeOutputReference <a name="AppsyncApiEventConfigConnectionAuthModeOutputReference" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigConnectionAuthModeOutputReference;

new AppsyncApiEventConfigConnectionAuthModeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode">AppsyncApiEventConfigConnectionAuthMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode">AppsyncApiEventConfigConnectionAuthMode</a>

---


### AppsyncApiEventConfigDefaultPublishAuthModeList <a name="AppsyncApiEventConfigDefaultPublishAuthModeList" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigDefaultPublishAuthModeList;

new AppsyncApiEventConfigDefaultPublishAuthModeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.get"></a>

```java
public AppsyncApiEventConfigDefaultPublishAuthModeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode">AppsyncApiEventConfigDefaultPublishAuthMode</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode">AppsyncApiEventConfigDefaultPublishAuthMode</a>>

---


### AppsyncApiEventConfigDefaultPublishAuthModeOutputReference <a name="AppsyncApiEventConfigDefaultPublishAuthModeOutputReference" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference;

new AppsyncApiEventConfigDefaultPublishAuthModeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode">AppsyncApiEventConfigDefaultPublishAuthMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode">AppsyncApiEventConfigDefaultPublishAuthMode</a>

---


### AppsyncApiEventConfigDefaultSubscribeAuthModeList <a name="AppsyncApiEventConfigDefaultSubscribeAuthModeList" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigDefaultSubscribeAuthModeList;

new AppsyncApiEventConfigDefaultSubscribeAuthModeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.get"></a>

```java
public AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode">AppsyncApiEventConfigDefaultSubscribeAuthMode</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode">AppsyncApiEventConfigDefaultSubscribeAuthMode</a>>

---


### AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference <a name="AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference;

new AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode">AppsyncApiEventConfigDefaultSubscribeAuthMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode">AppsyncApiEventConfigDefaultSubscribeAuthMode</a>

---


### AppsyncApiEventConfigList <a name="AppsyncApiEventConfigList" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigList;

new AppsyncApiEventConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.get"></a>

```java
public AppsyncApiEventConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>>

---


### AppsyncApiEventConfigLogConfigList <a name="AppsyncApiEventConfigLogConfigList" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigLogConfigList;

new AppsyncApiEventConfigLogConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.get"></a>

```java
public AppsyncApiEventConfigLogConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>>

---


### AppsyncApiEventConfigLogConfigOutputReference <a name="AppsyncApiEventConfigLogConfigOutputReference" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigLogConfigOutputReference;

new AppsyncApiEventConfigLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArnInput">cloudwatchLogsRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArn">cloudwatchLogsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogsRoleArnInput`<sup>Optional</sup> <a name="cloudwatchLogsRoleArnInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArnInput"></a>

```java
public java.lang.String getCloudwatchLogsRoleArnInput();
```

- *Type:* java.lang.String

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogsRoleArn`<sup>Required</sup> <a name="cloudwatchLogsRoleArn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArn"></a>

```java
public java.lang.String getCloudwatchLogsRoleArn();
```

- *Type:* java.lang.String

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>

---


### AppsyncApiEventConfigOutputReference <a name="AppsyncApiEventConfigOutputReference" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appsync_api.AppsyncApiEventConfigOutputReference;

new AppsyncApiEventConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putAuthProvider">putAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putConnectionAuthMode">putConnectionAuthMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultPublishAuthMode">putDefaultPublishAuthMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultSubscribeAuthMode">putDefaultSubscribeAuthMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resetAuthProvider">resetAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resetConnectionAuthMode">resetConnectionAuthMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultPublishAuthMode">resetDefaultPublishAuthMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultSubscribeAuthMode">resetDefaultSubscribeAuthMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resetLogConfig">resetLogConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthProvider` <a name="putAuthProvider" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putAuthProvider"></a>

```java
public void putAuthProvider(IResolvable OR java.util.List<AppsyncApiEventConfigAuthProvider> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putAuthProvider.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider">AppsyncApiEventConfigAuthProvider</a>>

---

##### `putConnectionAuthMode` <a name="putConnectionAuthMode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putConnectionAuthMode"></a>

```java
public void putConnectionAuthMode(IResolvable OR java.util.List<AppsyncApiEventConfigConnectionAuthMode> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putConnectionAuthMode.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode">AppsyncApiEventConfigConnectionAuthMode</a>>

---

##### `putDefaultPublishAuthMode` <a name="putDefaultPublishAuthMode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultPublishAuthMode"></a>

```java
public void putDefaultPublishAuthMode(IResolvable OR java.util.List<AppsyncApiEventConfigDefaultPublishAuthMode> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultPublishAuthMode.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode">AppsyncApiEventConfigDefaultPublishAuthMode</a>>

---

##### `putDefaultSubscribeAuthMode` <a name="putDefaultSubscribeAuthMode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultSubscribeAuthMode"></a>

```java
public void putDefaultSubscribeAuthMode(IResolvable OR java.util.List<AppsyncApiEventConfigDefaultSubscribeAuthMode> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultSubscribeAuthMode.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode">AppsyncApiEventConfigDefaultSubscribeAuthMode</a>>

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putLogConfig"></a>

```java
public void putLogConfig(IResolvable OR java.util.List<AppsyncApiEventConfigLogConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putLogConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>>

---

##### `resetAuthProvider` <a name="resetAuthProvider" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resetAuthProvider"></a>

```java
public void resetAuthProvider()
```

##### `resetConnectionAuthMode` <a name="resetConnectionAuthMode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resetConnectionAuthMode"></a>

```java
public void resetConnectionAuthMode()
```

##### `resetDefaultPublishAuthMode` <a name="resetDefaultPublishAuthMode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultPublishAuthMode"></a>

```java
public void resetDefaultPublishAuthMode()
```

##### `resetDefaultSubscribeAuthMode` <a name="resetDefaultSubscribeAuthMode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultSubscribeAuthMode"></a>

```java
public void resetDefaultSubscribeAuthMode()
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resetLogConfig"></a>

```java
public void resetLogConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProvider">authProvider</a></code> | <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList">AppsyncApiEventConfigAuthProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthMode">connectionAuthMode</a></code> | <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList">AppsyncApiEventConfigConnectionAuthModeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthMode">defaultPublishAuthMode</a></code> | <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList">AppsyncApiEventConfigDefaultPublishAuthModeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthMode">defaultSubscribeAuthMode</a></code> | <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList">AppsyncApiEventConfigDefaultSubscribeAuthModeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList">AppsyncApiEventConfigLogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProviderInput">authProviderInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider">AppsyncApiEventConfigAuthProvider</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthModeInput">connectionAuthModeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode">AppsyncApiEventConfigConnectionAuthMode</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthModeInput">defaultPublishAuthModeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode">AppsyncApiEventConfigDefaultPublishAuthMode</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthModeInput">defaultSubscribeAuthModeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode">AppsyncApiEventConfigDefaultSubscribeAuthMode</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfigInput">logConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authProvider`<sup>Required</sup> <a name="authProvider" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProvider"></a>

```java
public AppsyncApiEventConfigAuthProviderList getAuthProvider();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList">AppsyncApiEventConfigAuthProviderList</a>

---

##### `connectionAuthMode`<sup>Required</sup> <a name="connectionAuthMode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthMode"></a>

```java
public AppsyncApiEventConfigConnectionAuthModeList getConnectionAuthMode();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList">AppsyncApiEventConfigConnectionAuthModeList</a>

---

##### `defaultPublishAuthMode`<sup>Required</sup> <a name="defaultPublishAuthMode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthMode"></a>

```java
public AppsyncApiEventConfigDefaultPublishAuthModeList getDefaultPublishAuthMode();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList">AppsyncApiEventConfigDefaultPublishAuthModeList</a>

---

##### `defaultSubscribeAuthMode`<sup>Required</sup> <a name="defaultSubscribeAuthMode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthMode"></a>

```java
public AppsyncApiEventConfigDefaultSubscribeAuthModeList getDefaultSubscribeAuthMode();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList">AppsyncApiEventConfigDefaultSubscribeAuthModeList</a>

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfig"></a>

```java
public AppsyncApiEventConfigLogConfigList getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList">AppsyncApiEventConfigLogConfigList</a>

---

##### `authProviderInput`<sup>Optional</sup> <a name="authProviderInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProviderInput"></a>

```java
public java.lang.Object getAuthProviderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider">AppsyncApiEventConfigAuthProvider</a>>

---

##### `connectionAuthModeInput`<sup>Optional</sup> <a name="connectionAuthModeInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthModeInput"></a>

```java
public java.lang.Object getConnectionAuthModeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode">AppsyncApiEventConfigConnectionAuthMode</a>>

---

##### `defaultPublishAuthModeInput`<sup>Optional</sup> <a name="defaultPublishAuthModeInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthModeInput"></a>

```java
public java.lang.Object getDefaultPublishAuthModeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode">AppsyncApiEventConfigDefaultPublishAuthMode</a>>

---

##### `defaultSubscribeAuthModeInput`<sup>Optional</sup> <a name="defaultSubscribeAuthModeInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthModeInput"></a>

```java
public java.lang.Object getDefaultSubscribeAuthModeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode">AppsyncApiEventConfigDefaultSubscribeAuthMode</a>>

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfigInput"></a>

```java
public java.lang.Object getLogConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>

---



