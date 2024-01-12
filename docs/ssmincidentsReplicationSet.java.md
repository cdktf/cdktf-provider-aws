# `ssmincidentsReplicationSet` Submodule <a name="`ssmincidentsReplicationSet` Submodule" id="@cdktf/provider-aws.ssmincidentsReplicationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmincidentsReplicationSet <a name="SsmincidentsReplicationSet" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set aws_ssmincidents_replication_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmincidents_replication_set.SsmincidentsReplicationSet;

SsmincidentsReplicationSet.Builder.create(Construct scope, java.lang.String id)
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
    .region(IResolvable)
    .region(java.util.List<SsmincidentsReplicationSetRegion>)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SsmincidentsReplicationSetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.region">region</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion">SsmincidentsReplicationSetRegion</a>></code> | region block. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#id SsmincidentsReplicationSet#id}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#tags SsmincidentsReplicationSet#tags}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#tags_all SsmincidentsReplicationSet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts">SsmincidentsReplicationSetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.region"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion">SsmincidentsReplicationSetRegion</a>>

region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#region SsmincidentsReplicationSet#region}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#id SsmincidentsReplicationSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#tags SsmincidentsReplicationSet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#tags_all SsmincidentsReplicationSet#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts">SsmincidentsReplicationSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#timeouts SsmincidentsReplicationSet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putRegion">putRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRegion` <a name="putRegion" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putRegion"></a>

```java
public void putRegion(IResolvable OR java.util.List<SsmincidentsReplicationSetRegion> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putRegion.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion">SsmincidentsReplicationSetRegion</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putTimeouts"></a>

```java
public void putTimeouts(SsmincidentsReplicationSetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts">SsmincidentsReplicationSetTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SsmincidentsReplicationSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmincidents_replication_set.SsmincidentsReplicationSet;

SsmincidentsReplicationSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmincidents_replication_set.SsmincidentsReplicationSet;

SsmincidentsReplicationSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmincidents_replication_set.SsmincidentsReplicationSet;

SsmincidentsReplicationSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmincidents_replication_set.SsmincidentsReplicationSet;

SsmincidentsReplicationSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SsmincidentsReplicationSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SsmincidentsReplicationSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SsmincidentsReplicationSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SsmincidentsReplicationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SsmincidentsReplicationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.deletionProtected">deletionProtected</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.lastModifiedBy">lastModifiedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.region">region</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList">SsmincidentsReplicationSetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference">SsmincidentsReplicationSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.regionInput">regionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion">SsmincidentsReplicationSetRegion</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts">SsmincidentsReplicationSetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `deletionProtected`<sup>Required</sup> <a name="deletionProtected" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.deletionProtected"></a>

```java
public IResolvable getDeletionProtected();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lastModifiedBy`<sup>Required</sup> <a name="lastModifiedBy" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.lastModifiedBy"></a>

```java
public java.lang.String getLastModifiedBy();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.region"></a>

```java
public SsmincidentsReplicationSetRegionList getRegion();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList">SsmincidentsReplicationSetRegionList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.timeouts"></a>

```java
public SsmincidentsReplicationSetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference">SsmincidentsReplicationSetTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.regionInput"></a>

```java
public java.lang.Object getRegionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion">SsmincidentsReplicationSetRegion</a>>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts">SsmincidentsReplicationSetTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsmincidentsReplicationSetConfig <a name="SsmincidentsReplicationSetConfig" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmincidents_replication_set.SsmincidentsReplicationSetConfig;

SsmincidentsReplicationSetConfig.builder()
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
    .region(IResolvable)
    .region(java.util.List<SsmincidentsReplicationSetRegion>)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SsmincidentsReplicationSetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.region">region</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion">SsmincidentsReplicationSetRegion</a>></code> | region block. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#id SsmincidentsReplicationSet#id}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#tags SsmincidentsReplicationSet#tags}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#tags_all SsmincidentsReplicationSet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts">SsmincidentsReplicationSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.region"></a>

```java
public java.lang.Object getRegion();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion">SsmincidentsReplicationSetRegion</a>>

region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#region SsmincidentsReplicationSet#region}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#id SsmincidentsReplicationSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#tags SsmincidentsReplicationSet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#tags_all SsmincidentsReplicationSet#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.timeouts"></a>

```java
public SsmincidentsReplicationSetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts">SsmincidentsReplicationSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#timeouts SsmincidentsReplicationSet#timeouts}

---

### SsmincidentsReplicationSetRegion <a name="SsmincidentsReplicationSetRegion" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmincidents_replication_set.SsmincidentsReplicationSetRegion;

SsmincidentsReplicationSetRegion.builder()
    .name(java.lang.String)
//  .kmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#name SsmincidentsReplicationSet#name}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#kms_key_arn SsmincidentsReplicationSet#kms_key_arn}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#name SsmincidentsReplicationSet#name}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#kms_key_arn SsmincidentsReplicationSet#kms_key_arn}.

---

### SsmincidentsReplicationSetTimeouts <a name="SsmincidentsReplicationSetTimeouts" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmincidents_replication_set.SsmincidentsReplicationSetTimeouts;

SsmincidentsReplicationSetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#create SsmincidentsReplicationSet#create}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#delete SsmincidentsReplicationSet#delete}. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#update SsmincidentsReplicationSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#create SsmincidentsReplicationSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#delete SsmincidentsReplicationSet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.0/docs/resources/ssmincidents_replication_set#update SsmincidentsReplicationSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmincidentsReplicationSetRegionList <a name="SsmincidentsReplicationSetRegionList" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmincidents_replication_set.SsmincidentsReplicationSetRegionList;

new SsmincidentsReplicationSetRegionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.get"></a>

```java
public SsmincidentsReplicationSetRegionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion">SsmincidentsReplicationSetRegion</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion">SsmincidentsReplicationSetRegion</a>>

---


### SsmincidentsReplicationSetRegionOutputReference <a name="SsmincidentsReplicationSetRegionOutputReference" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmincidents_replication_set.SsmincidentsReplicationSetRegionOutputReference;

new SsmincidentsReplicationSetRegionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.statusMessage">statusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion">SsmincidentsReplicationSetRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.statusMessage"></a>

```java
public java.lang.String getStatusMessage();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion">SsmincidentsReplicationSetRegion</a>

---


### SsmincidentsReplicationSetTimeoutsOutputReference <a name="SsmincidentsReplicationSetTimeoutsOutputReference" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ssmincidents_replication_set.SsmincidentsReplicationSetTimeoutsOutputReference;

new SsmincidentsReplicationSetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts">SsmincidentsReplicationSetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts">SsmincidentsReplicationSetTimeouts</a>

---



