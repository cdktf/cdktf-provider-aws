# `securitylakeDataLake` Submodule <a name="`securitylakeDataLake` Submodule" id="@cdktf/provider-aws.securitylakeDataLake"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeDataLake <a name="SecuritylakeDataLake" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake aws_securitylake_data_lake}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLake;

SecuritylakeDataLake.Builder.create(Construct scope, java.lang.String id)
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
    .metaStoreManagerRoleArn(java.lang.String)
//  .configuration(IResolvable)
//  .configuration(java.util.List<SecuritylakeDataLakeConfiguration>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SecuritylakeDataLakeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.metaStoreManagerRoleArn">metaStoreManagerRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#meta_store_manager_role_arn SecuritylakeDataLake#meta_store_manager_role_arn}. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.configuration">configuration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration">SecuritylakeDataLakeConfiguration</a>></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#tags SecuritylakeDataLake#tags}. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts">SecuritylakeDataLakeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metaStoreManagerRoleArn`<sup>Required</sup> <a name="metaStoreManagerRoleArn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.metaStoreManagerRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#meta_store_manager_role_arn SecuritylakeDataLake#meta_store_manager_role_arn}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.configuration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration">SecuritylakeDataLakeConfiguration</a>>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#configuration SecuritylakeDataLake#configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#tags SecuritylakeDataLake#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts">SecuritylakeDataLakeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#timeouts SecuritylakeDataLake#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.putConfiguration"></a>

```java
public void putConfiguration(IResolvable OR java.util.List<SecuritylakeDataLakeConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.putConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration">SecuritylakeDataLakeConfiguration</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.putTimeouts"></a>

```java
public void putTimeouts(SecuritylakeDataLakeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts">SecuritylakeDataLakeTimeouts</a>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecuritylakeDataLake resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLake;

SecuritylakeDataLake.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLake;

SecuritylakeDataLake.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLake;

SecuritylakeDataLake.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLake;

SecuritylakeDataLake.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecuritylakeDataLake.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SecuritylakeDataLake resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecuritylakeDataLake to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecuritylakeDataLake that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SecuritylakeDataLake to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList">SecuritylakeDataLakeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.s3BucketArn">s3BucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference">SecuritylakeDataLakeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.configurationInput">configurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration">SecuritylakeDataLakeConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArnInput">metaStoreManagerRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts">SecuritylakeDataLakeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArn">metaStoreManagerRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.configuration"></a>

```java
public SecuritylakeDataLakeConfigurationList getConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList">SecuritylakeDataLakeConfigurationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `s3BucketArn`<sup>Required</sup> <a name="s3BucketArn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.s3BucketArn"></a>

```java
public java.lang.String getS3BucketArn();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.timeouts"></a>

```java
public SecuritylakeDataLakeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference">SecuritylakeDataLakeTimeoutsOutputReference</a>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.configurationInput"></a>

```java
public java.lang.Object getConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration">SecuritylakeDataLakeConfiguration</a>>

---

##### `metaStoreManagerRoleArnInput`<sup>Optional</sup> <a name="metaStoreManagerRoleArnInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArnInput"></a>

```java
public java.lang.String getMetaStoreManagerRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts">SecuritylakeDataLakeTimeouts</a>

---

##### `metaStoreManagerRoleArn`<sup>Required</sup> <a name="metaStoreManagerRoleArn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArn"></a>

```java
public java.lang.String getMetaStoreManagerRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeDataLakeConfig <a name="SecuritylakeDataLakeConfig" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLakeConfig;

SecuritylakeDataLakeConfig.builder()
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
    .metaStoreManagerRoleArn(java.lang.String)
//  .configuration(IResolvable)
//  .configuration(java.util.List<SecuritylakeDataLakeConfiguration>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SecuritylakeDataLakeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.metaStoreManagerRoleArn">metaStoreManagerRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#meta_store_manager_role_arn SecuritylakeDataLake#meta_store_manager_role_arn}. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.configuration">configuration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration">SecuritylakeDataLakeConfiguration</a>></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#tags SecuritylakeDataLake#tags}. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts">SecuritylakeDataLakeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metaStoreManagerRoleArn`<sup>Required</sup> <a name="metaStoreManagerRoleArn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.metaStoreManagerRoleArn"></a>

```java
public java.lang.String getMetaStoreManagerRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#meta_store_manager_role_arn SecuritylakeDataLake#meta_store_manager_role_arn}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.configuration"></a>

```java
public java.lang.Object getConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration">SecuritylakeDataLakeConfiguration</a>>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#configuration SecuritylakeDataLake#configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#tags SecuritylakeDataLake#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.timeouts"></a>

```java
public SecuritylakeDataLakeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts">SecuritylakeDataLakeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#timeouts SecuritylakeDataLake#timeouts}

---

### SecuritylakeDataLakeConfiguration <a name="SecuritylakeDataLakeConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLakeConfiguration;

SecuritylakeDataLakeConfiguration.builder()
    .region(java.lang.String)
//  .encryptionConfiguration(IResolvable)
//  .encryptionConfiguration(java.util.List<SecuritylakeDataLakeConfigurationEncryptionConfiguration>)
//  .lifecycleConfiguration(IResolvable)
//  .lifecycleConfiguration(java.util.List<SecuritylakeDataLakeConfigurationLifecycleConfiguration>)
//  .replicationConfiguration(IResolvable)
//  .replicationConfiguration(java.util.List<SecuritylakeDataLakeConfigurationReplicationConfiguration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#region SecuritylakeDataLake#region}. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration">SecuritylakeDataLakeConfigurationEncryptionConfiguration</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#encryption_configuration SecuritylakeDataLake#encryption_configuration}. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration">SecuritylakeDataLakeConfigurationLifecycleConfiguration</a>></code> | lifecycle_configuration block. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.replicationConfiguration">replicationConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration">SecuritylakeDataLakeConfigurationReplicationConfiguration</a>></code> | replication_configuration block. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#region SecuritylakeDataLake#region}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.encryptionConfiguration"></a>

```java
public java.lang.Object getEncryptionConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration">SecuritylakeDataLakeConfigurationEncryptionConfiguration</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#encryption_configuration SecuritylakeDataLake#encryption_configuration}.

---

##### `lifecycleConfiguration`<sup>Optional</sup> <a name="lifecycleConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.lifecycleConfiguration"></a>

```java
public java.lang.Object getLifecycleConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration">SecuritylakeDataLakeConfigurationLifecycleConfiguration</a>>

lifecycle_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#lifecycle_configuration SecuritylakeDataLake#lifecycle_configuration}

---

##### `replicationConfiguration`<sup>Optional</sup> <a name="replicationConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.replicationConfiguration"></a>

```java
public java.lang.Object getReplicationConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration">SecuritylakeDataLakeConfigurationReplicationConfiguration</a>>

replication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#replication_configuration SecuritylakeDataLake#replication_configuration}

---

### SecuritylakeDataLakeConfigurationEncryptionConfiguration <a name="SecuritylakeDataLakeConfigurationEncryptionConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLakeConfigurationEncryptionConfiguration;

SecuritylakeDataLakeConfigurationEncryptionConfiguration.builder()
//  .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#kms_key_id SecuritylakeDataLake#kms_key_id}. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#kms_key_id SecuritylakeDataLake#kms_key_id}.

---

### SecuritylakeDataLakeConfigurationLifecycleConfiguration <a name="SecuritylakeDataLakeConfigurationLifecycleConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLakeConfigurationLifecycleConfiguration;

SecuritylakeDataLakeConfigurationLifecycleConfiguration.builder()
//  .expiration(IResolvable)
//  .expiration(java.util.List<SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration>)
//  .transition(IResolvable)
//  .transition(java.util.List<SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration.property.expiration">expiration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration</a>></code> | expiration block. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration.property.transition">transition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition</a>></code> | transition block. |

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration.property.expiration"></a>

```java
public java.lang.Object getExpiration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration</a>>

expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#expiration SecuritylakeDataLake#expiration}

---

##### `transition`<sup>Optional</sup> <a name="transition" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration.property.transition"></a>

```java
public java.lang.Object getTransition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition</a>>

transition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#transition SecuritylakeDataLake#transition}

---

### SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration;

SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration.builder()
//  .days(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration.property.days">days</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#days SecuritylakeDataLake#days}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#days SecuritylakeDataLake#days}.

---

### SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition;

SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition.builder()
//  .days(java.lang.Number)
//  .storageClass(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition.property.days">days</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#days SecuritylakeDataLake#days}. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#storage_class SecuritylakeDataLake#storage_class}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#days SecuritylakeDataLake#days}.

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#storage_class SecuritylakeDataLake#storage_class}.

---

### SecuritylakeDataLakeConfigurationReplicationConfiguration <a name="SecuritylakeDataLakeConfigurationReplicationConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLakeConfigurationReplicationConfiguration;

SecuritylakeDataLakeConfigurationReplicationConfiguration.builder()
//  .regions(java.util.List<java.lang.String>)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#regions SecuritylakeDataLake#regions}. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#role_arn SecuritylakeDataLake#role_arn}. |

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#regions SecuritylakeDataLake#regions}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#role_arn SecuritylakeDataLake#role_arn}.

---

### SecuritylakeDataLakeTimeouts <a name="SecuritylakeDataLakeTimeouts" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLakeTimeouts;

SecuritylakeDataLakeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#create SecuritylakeDataLake#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#delete SecuritylakeDataLake#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/securitylake_data_lake#update SecuritylakeDataLake#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeDataLakeConfigurationEncryptionConfigurationList <a name="SecuritylakeDataLakeConfigurationEncryptionConfigurationList" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList;

new SecuritylakeDataLakeConfigurationEncryptionConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.get"></a>

```java
public SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration">SecuritylakeDataLakeConfigurationEncryptionConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration">SecuritylakeDataLakeConfigurationEncryptionConfiguration</a>>

---


### SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference <a name="SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference;

new SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration">SecuritylakeDataLakeConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration">SecuritylakeDataLakeConfigurationEncryptionConfiguration</a>

---


### SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList;

new SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.get"></a>

```java
public SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration</a>>

---


### SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference;

new SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.resetDays">resetDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.resetDays"></a>

```java
public void resetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.daysInput">daysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.days">days</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.daysInput"></a>

```java
public java.lang.Number getDaysInput();
```

- *Type:* java.lang.Number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration</a>

---


### SecuritylakeDataLakeConfigurationLifecycleConfigurationList <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationList" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList;

new SecuritylakeDataLakeConfigurationLifecycleConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.get"></a>

```java
public SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration">SecuritylakeDataLakeConfigurationLifecycleConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration">SecuritylakeDataLakeConfigurationLifecycleConfiguration</a>>

---


### SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference;

new SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.putExpiration">putExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.putTransition">putTransition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.resetTransition">resetTransition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpiration` <a name="putExpiration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.putExpiration"></a>

```java
public void putExpiration(IResolvable OR java.util.List<SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.putExpiration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration</a>>

---

##### `putTransition` <a name="putTransition" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.putTransition"></a>

```java
public void putTransition(IResolvable OR java.util.List<SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.putTransition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition</a>>

---

##### `resetExpiration` <a name="resetExpiration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.resetExpiration"></a>

```java
public void resetExpiration()
```

##### `resetTransition` <a name="resetTransition" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.resetTransition"></a>

```java
public void resetTransition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.transition">transition</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.expirationInput">expirationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.transitionInput">transitionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration">SecuritylakeDataLakeConfigurationLifecycleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.expiration"></a>

```java
public SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList getExpiration();
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList</a>

---

##### `transition`<sup>Required</sup> <a name="transition" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.transition"></a>

```java
public SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList getTransition();
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList</a>

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.expirationInput"></a>

```java
public java.lang.Object getExpirationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration</a>>

---

##### `transitionInput`<sup>Optional</sup> <a name="transitionInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.transitionInput"></a>

```java
public java.lang.Object getTransitionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration">SecuritylakeDataLakeConfigurationLifecycleConfiguration</a>

---


### SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList;

new SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.get"></a>

```java
public SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition</a>>

---


### SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference;

new SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.resetStorageClass">resetStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.resetDays"></a>

```java
public void resetDays()
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.resetStorageClass"></a>

```java
public void resetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.daysInput">daysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.days">days</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.daysInput"></a>

```java
public java.lang.Number getDaysInput();
```

- *Type:* java.lang.Number

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.storageClassInput"></a>

```java
public java.lang.String getStorageClassInput();
```

- *Type:* java.lang.String

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition</a>

---


### SecuritylakeDataLakeConfigurationList <a name="SecuritylakeDataLakeConfigurationList" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLakeConfigurationList;

new SecuritylakeDataLakeConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.get"></a>

```java
public SecuritylakeDataLakeConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration">SecuritylakeDataLakeConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration">SecuritylakeDataLakeConfiguration</a>>

---


### SecuritylakeDataLakeConfigurationOutputReference <a name="SecuritylakeDataLakeConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLakeConfigurationOutputReference;

new SecuritylakeDataLakeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putLifecycleConfiguration">putLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putReplicationConfiguration">putReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resetLifecycleConfiguration">resetLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resetReplicationConfiguration">resetReplicationConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putEncryptionConfiguration"></a>

```java
public void putEncryptionConfiguration(IResolvable OR java.util.List<SecuritylakeDataLakeConfigurationEncryptionConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration">SecuritylakeDataLakeConfigurationEncryptionConfiguration</a>>

---

##### `putLifecycleConfiguration` <a name="putLifecycleConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putLifecycleConfiguration"></a>

```java
public void putLifecycleConfiguration(IResolvable OR java.util.List<SecuritylakeDataLakeConfigurationLifecycleConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putLifecycleConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration">SecuritylakeDataLakeConfigurationLifecycleConfiguration</a>>

---

##### `putReplicationConfiguration` <a name="putReplicationConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putReplicationConfiguration"></a>

```java
public void putReplicationConfiguration(IResolvable OR java.util.List<SecuritylakeDataLakeConfigurationReplicationConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putReplicationConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration">SecuritylakeDataLakeConfigurationReplicationConfiguration</a>>

---

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resetEncryptionConfiguration"></a>

```java
public void resetEncryptionConfiguration()
```

##### `resetLifecycleConfiguration` <a name="resetLifecycleConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resetLifecycleConfiguration"></a>

```java
public void resetLifecycleConfiguration()
```

##### `resetReplicationConfiguration` <a name="resetReplicationConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resetReplicationConfiguration"></a>

```java
public void resetReplicationConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList">SecuritylakeDataLakeConfigurationEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.lifecycleConfiguration">lifecycleConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList">SecuritylakeDataLakeConfigurationLifecycleConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList">SecuritylakeDataLakeConfigurationReplicationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration">SecuritylakeDataLakeConfigurationEncryptionConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.lifecycleConfigurationInput">lifecycleConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration">SecuritylakeDataLakeConfigurationLifecycleConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.replicationConfigurationInput">replicationConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration">SecuritylakeDataLakeConfigurationReplicationConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration">SecuritylakeDataLakeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.encryptionConfiguration"></a>

```java
public SecuritylakeDataLakeConfigurationEncryptionConfigurationList getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList">SecuritylakeDataLakeConfigurationEncryptionConfigurationList</a>

---

##### `lifecycleConfiguration`<sup>Required</sup> <a name="lifecycleConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.lifecycleConfiguration"></a>

```java
public SecuritylakeDataLakeConfigurationLifecycleConfigurationList getLifecycleConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList">SecuritylakeDataLakeConfigurationLifecycleConfigurationList</a>

---

##### `replicationConfiguration`<sup>Required</sup> <a name="replicationConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.replicationConfiguration"></a>

```java
public SecuritylakeDataLakeConfigurationReplicationConfigurationList getReplicationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList">SecuritylakeDataLakeConfigurationReplicationConfigurationList</a>

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```java
public java.lang.Object getEncryptionConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration">SecuritylakeDataLakeConfigurationEncryptionConfiguration</a>>

---

##### `lifecycleConfigurationInput`<sup>Optional</sup> <a name="lifecycleConfigurationInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.lifecycleConfigurationInput"></a>

```java
public java.lang.Object getLifecycleConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration">SecuritylakeDataLakeConfigurationLifecycleConfiguration</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `replicationConfigurationInput`<sup>Optional</sup> <a name="replicationConfigurationInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.replicationConfigurationInput"></a>

```java
public java.lang.Object getReplicationConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration">SecuritylakeDataLakeConfigurationReplicationConfiguration</a>>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration">SecuritylakeDataLakeConfiguration</a>

---


### SecuritylakeDataLakeConfigurationReplicationConfigurationList <a name="SecuritylakeDataLakeConfigurationReplicationConfigurationList" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLakeConfigurationReplicationConfigurationList;

new SecuritylakeDataLakeConfigurationReplicationConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.get"></a>

```java
public SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration">SecuritylakeDataLakeConfigurationReplicationConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration">SecuritylakeDataLakeConfigurationReplicationConfiguration</a>>

---


### SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference <a name="SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference;

new SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegions` <a name="resetRegions" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.resetRegions"></a>

```java
public void resetRegions()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration">SecuritylakeDataLakeConfigurationReplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration">SecuritylakeDataLakeConfigurationReplicationConfiguration</a>

---


### SecuritylakeDataLakeTimeoutsOutputReference <a name="SecuritylakeDataLakeTimeoutsOutputReference" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.securitylake_data_lake.SecuritylakeDataLakeTimeoutsOutputReference;

new SecuritylakeDataLakeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts">SecuritylakeDataLakeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts">SecuritylakeDataLakeTimeouts</a>

---



