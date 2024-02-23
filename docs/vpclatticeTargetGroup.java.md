# `vpclatticeTargetGroup` Submodule <a name="`vpclatticeTargetGroup` Submodule" id="@cdktf/provider-aws.vpclatticeTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeTargetGroup <a name="VpclatticeTargetGroup" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group aws_vpclattice_target_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group.VpclatticeTargetGroup;

VpclatticeTargetGroup.Builder.create(Construct scope, java.lang.String id)
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
    .type(java.lang.String)
//  .config(VpclatticeTargetGroupConfigA)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VpclatticeTargetGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#name VpclatticeTargetGroup#name}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#type VpclatticeTargetGroup#type}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#id VpclatticeTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#tags VpclatticeTargetGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#tags_all VpclatticeTargetGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#name VpclatticeTargetGroup#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#type VpclatticeTargetGroup#type}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#config VpclatticeTargetGroup#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#id VpclatticeTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#tags VpclatticeTargetGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#tags_all VpclatticeTargetGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#timeouts VpclatticeTargetGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putConfig"></a>

```java
public void putConfig(VpclatticeTargetGroupConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putTimeouts"></a>

```java
public void putTimeouts(VpclatticeTargetGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpclatticeTargetGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group.VpclatticeTargetGroup;

VpclatticeTargetGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group.VpclatticeTargetGroup;

VpclatticeTargetGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group.VpclatticeTargetGroup;

VpclatticeTargetGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group.VpclatticeTargetGroup;

VpclatticeTargetGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VpclatticeTargetGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VpclatticeTargetGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VpclatticeTargetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VpclatticeTargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VpclatticeTargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference">VpclatticeTargetGroupConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference">VpclatticeTargetGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.config"></a>

```java
public VpclatticeTargetGroupConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference">VpclatticeTargetGroupConfigAOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.timeouts"></a>

```java
public VpclatticeTargetGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference">VpclatticeTargetGroupTimeoutsOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.configInput"></a>

```java
public VpclatticeTargetGroupConfigA getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeTargetGroupConfig <a name="VpclatticeTargetGroupConfig" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group.VpclatticeTargetGroupConfig;

VpclatticeTargetGroupConfig.builder()
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
    .type(java.lang.String)
//  .config(VpclatticeTargetGroupConfigA)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VpclatticeTargetGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#name VpclatticeTargetGroup#name}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#type VpclatticeTargetGroup#type}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#id VpclatticeTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#tags VpclatticeTargetGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#tags_all VpclatticeTargetGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#name VpclatticeTargetGroup#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#type VpclatticeTargetGroup#type}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.config"></a>

```java
public VpclatticeTargetGroupConfigA getConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#config VpclatticeTargetGroup#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#id VpclatticeTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#tags VpclatticeTargetGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#tags_all VpclatticeTargetGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfig.property.timeouts"></a>

```java
public VpclatticeTargetGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#timeouts VpclatticeTargetGroup#timeouts}

---

### VpclatticeTargetGroupConfigA <a name="VpclatticeTargetGroupConfigA" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group.VpclatticeTargetGroupConfigA;

VpclatticeTargetGroupConfigA.builder()
//  .healthCheck(VpclatticeTargetGroupConfigHealthCheck)
//  .ipAddressType(java.lang.String)
//  .lambdaEventStructureVersion(java.lang.String)
//  .port(java.lang.Number)
//  .protocol(java.lang.String)
//  .protocolVersion(java.lang.String)
//  .vpcIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#ip_address_type VpclatticeTargetGroup#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.lambdaEventStructureVersion">lambdaEventStructureVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#lambda_event_structure_version VpclatticeTargetGroup#lambda_event_structure_version}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#port VpclatticeTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#protocol VpclatticeTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#protocol_version VpclatticeTargetGroup#protocol_version}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.vpcIdentifier">vpcIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#vpc_identifier VpclatticeTargetGroup#vpc_identifier}. |

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.healthCheck"></a>

```java
public VpclatticeTargetGroupConfigHealthCheck getHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#health_check VpclatticeTargetGroup#health_check}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#ip_address_type VpclatticeTargetGroup#ip_address_type}.

---

##### `lambdaEventStructureVersion`<sup>Optional</sup> <a name="lambdaEventStructureVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.lambdaEventStructureVersion"></a>

```java
public java.lang.String getLambdaEventStructureVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#lambda_event_structure_version VpclatticeTargetGroup#lambda_event_structure_version}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#port VpclatticeTargetGroup#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#protocol VpclatticeTargetGroup#protocol}.

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.protocolVersion"></a>

```java
public java.lang.String getProtocolVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#protocol_version VpclatticeTargetGroup#protocol_version}.

---

##### `vpcIdentifier`<sup>Optional</sup> <a name="vpcIdentifier" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA.property.vpcIdentifier"></a>

```java
public java.lang.String getVpcIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#vpc_identifier VpclatticeTargetGroup#vpc_identifier}.

---

### VpclatticeTargetGroupConfigHealthCheck <a name="VpclatticeTargetGroupConfigHealthCheck" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group.VpclatticeTargetGroupConfigHealthCheck;

VpclatticeTargetGroupConfigHealthCheck.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .healthCheckIntervalSeconds(java.lang.Number)
//  .healthCheckTimeoutSeconds(java.lang.Number)
//  .healthyThresholdCount(java.lang.Number)
//  .matcher(VpclatticeTargetGroupConfigHealthCheckMatcher)
//  .path(java.lang.String)
//  .port(java.lang.Number)
//  .protocol(java.lang.String)
//  .protocolVersion(java.lang.String)
//  .unhealthyThresholdCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#enabled VpclatticeTargetGroup#enabled}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthCheckIntervalSeconds">healthCheckIntervalSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#health_check_interval_seconds VpclatticeTargetGroup#health_check_interval_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthCheckTimeoutSeconds">healthCheckTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#health_check_timeout_seconds VpclatticeTargetGroup#health_check_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthyThresholdCount">healthyThresholdCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#healthy_threshold_count VpclatticeTargetGroup#healthy_threshold_count}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.matcher">matcher</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a></code> | matcher block. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#path VpclatticeTargetGroup#path}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#port VpclatticeTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#protocol VpclatticeTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#protocol_version VpclatticeTargetGroup#protocol_version}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.unhealthyThresholdCount">unhealthyThresholdCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#unhealthy_threshold_count VpclatticeTargetGroup#unhealthy_threshold_count}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#enabled VpclatticeTargetGroup#enabled}.

---

##### `healthCheckIntervalSeconds`<sup>Optional</sup> <a name="healthCheckIntervalSeconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthCheckIntervalSeconds"></a>

```java
public java.lang.Number getHealthCheckIntervalSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#health_check_interval_seconds VpclatticeTargetGroup#health_check_interval_seconds}.

---

##### `healthCheckTimeoutSeconds`<sup>Optional</sup> <a name="healthCheckTimeoutSeconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthCheckTimeoutSeconds"></a>

```java
public java.lang.Number getHealthCheckTimeoutSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#health_check_timeout_seconds VpclatticeTargetGroup#health_check_timeout_seconds}.

---

##### `healthyThresholdCount`<sup>Optional</sup> <a name="healthyThresholdCount" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.healthyThresholdCount"></a>

```java
public java.lang.Number getHealthyThresholdCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#healthy_threshold_count VpclatticeTargetGroup#healthy_threshold_count}.

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.matcher"></a>

```java
public VpclatticeTargetGroupConfigHealthCheckMatcher getMatcher();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a>

matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#matcher VpclatticeTargetGroup#matcher}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#path VpclatticeTargetGroup#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#port VpclatticeTargetGroup#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#protocol VpclatticeTargetGroup#protocol}.

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.protocolVersion"></a>

```java
public java.lang.String getProtocolVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#protocol_version VpclatticeTargetGroup#protocol_version}.

---

##### `unhealthyThresholdCount`<sup>Optional</sup> <a name="unhealthyThresholdCount" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck.property.unhealthyThresholdCount"></a>

```java
public java.lang.Number getUnhealthyThresholdCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#unhealthy_threshold_count VpclatticeTargetGroup#unhealthy_threshold_count}.

---

### VpclatticeTargetGroupConfigHealthCheckMatcher <a name="VpclatticeTargetGroupConfigHealthCheckMatcher" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group.VpclatticeTargetGroupConfigHealthCheckMatcher;

VpclatticeTargetGroupConfigHealthCheckMatcher.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#value VpclatticeTargetGroup#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#value VpclatticeTargetGroup#value}.

---

### VpclatticeTargetGroupTimeouts <a name="VpclatticeTargetGroupTimeouts" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group.VpclatticeTargetGroupTimeouts;

VpclatticeTargetGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#create VpclatticeTargetGroup#create}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#delete VpclatticeTargetGroup#delete}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#update VpclatticeTargetGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#create VpclatticeTargetGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#delete VpclatticeTargetGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/vpclattice_target_group#update VpclatticeTargetGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeTargetGroupConfigAOutputReference <a name="VpclatticeTargetGroupConfigAOutputReference" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group.VpclatticeTargetGroupConfigAOutputReference;

new VpclatticeTargetGroupConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.putHealthCheck">putHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetHealthCheck">resetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetLambdaEventStructureVersion">resetLambdaEventStructureVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetProtocolVersion">resetProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetVpcIdentifier">resetVpcIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHealthCheck` <a name="putHealthCheck" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.putHealthCheck"></a>

```java
public void putHealthCheck(VpclatticeTargetGroupConfigHealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a>

---

##### `resetHealthCheck` <a name="resetHealthCheck" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetHealthCheck"></a>

```java
public void resetHealthCheck()
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetIpAddressType"></a>

```java
public void resetIpAddressType()
```

##### `resetLambdaEventStructureVersion` <a name="resetLambdaEventStructureVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetLambdaEventStructureVersion"></a>

```java
public void resetLambdaEventStructureVersion()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetProtocolVersion` <a name="resetProtocolVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetProtocolVersion"></a>

```java
public void resetProtocolVersion()
```

##### `resetVpcIdentifier` <a name="resetVpcIdentifier" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.resetVpcIdentifier"></a>

```java
public void resetVpcIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference">VpclatticeTargetGroupConfigHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.healthCheckInput">healthCheckInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.lambdaEventStructureVersionInput">lambdaEventStructureVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolVersionInput">protocolVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.vpcIdentifierInput">vpcIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.lambdaEventStructureVersion">lambdaEventStructureVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.vpcIdentifier">vpcIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.healthCheck"></a>

```java
public VpclatticeTargetGroupConfigHealthCheckOutputReference getHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference">VpclatticeTargetGroupConfigHealthCheckOutputReference</a>

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.healthCheckInput"></a>

```java
public VpclatticeTargetGroupConfigHealthCheck getHealthCheckInput();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a>

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.ipAddressTypeInput"></a>

```java
public java.lang.String getIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `lambdaEventStructureVersionInput`<sup>Optional</sup> <a name="lambdaEventStructureVersionInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.lambdaEventStructureVersionInput"></a>

```java
public java.lang.String getLambdaEventStructureVersionInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `protocolVersionInput`<sup>Optional</sup> <a name="protocolVersionInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolVersionInput"></a>

```java
public java.lang.String getProtocolVersionInput();
```

- *Type:* java.lang.String

---

##### `vpcIdentifierInput`<sup>Optional</sup> <a name="vpcIdentifierInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.vpcIdentifierInput"></a>

```java
public java.lang.String getVpcIdentifierInput();
```

- *Type:* java.lang.String

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `lambdaEventStructureVersion`<sup>Required</sup> <a name="lambdaEventStructureVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.lambdaEventStructureVersion"></a>

```java
public java.lang.String getLambdaEventStructureVersion();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.protocolVersion"></a>

```java
public java.lang.String getProtocolVersion();
```

- *Type:* java.lang.String

---

##### `vpcIdentifier`<sup>Required</sup> <a name="vpcIdentifier" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.vpcIdentifier"></a>

```java
public java.lang.String getVpcIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigAOutputReference.property.internalValue"></a>

```java
public VpclatticeTargetGroupConfigA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigA">VpclatticeTargetGroupConfigA</a>

---


### VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference <a name="VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference;

new VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference.property.internalValue"></a>

```java
public VpclatticeTargetGroupConfigHealthCheckMatcher getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a>

---


### VpclatticeTargetGroupConfigHealthCheckOutputReference <a name="VpclatticeTargetGroupConfigHealthCheckOutputReference" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group.VpclatticeTargetGroupConfigHealthCheckOutputReference;

new VpclatticeTargetGroupConfigHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.putMatcher">putMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthCheckIntervalSeconds">resetHealthCheckIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthCheckTimeoutSeconds">resetHealthCheckTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthyThresholdCount">resetHealthyThresholdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetMatcher">resetMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetProtocolVersion">resetProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetUnhealthyThresholdCount">resetUnhealthyThresholdCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatcher` <a name="putMatcher" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.putMatcher"></a>

```java
public void putMatcher(VpclatticeTargetGroupConfigHealthCheckMatcher value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.putMatcher.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetHealthCheckIntervalSeconds` <a name="resetHealthCheckIntervalSeconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthCheckIntervalSeconds"></a>

```java
public void resetHealthCheckIntervalSeconds()
```

##### `resetHealthCheckTimeoutSeconds` <a name="resetHealthCheckTimeoutSeconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthCheckTimeoutSeconds"></a>

```java
public void resetHealthCheckTimeoutSeconds()
```

##### `resetHealthyThresholdCount` <a name="resetHealthyThresholdCount" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetHealthyThresholdCount"></a>

```java
public void resetHealthyThresholdCount()
```

##### `resetMatcher` <a name="resetMatcher" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetMatcher"></a>

```java
public void resetMatcher()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetProtocolVersion` <a name="resetProtocolVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetProtocolVersion"></a>

```java
public void resetProtocolVersion()
```

##### `resetUnhealthyThresholdCount` <a name="resetUnhealthyThresholdCount" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.resetUnhealthyThresholdCount"></a>

```java
public void resetUnhealthyThresholdCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.matcher">matcher</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference">VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckIntervalSecondsInput">healthCheckIntervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckTimeoutSecondsInput">healthCheckTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthyThresholdCountInput">healthyThresholdCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.matcherInput">matcherInput</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolVersionInput">protocolVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.unhealthyThresholdCountInput">unhealthyThresholdCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckIntervalSeconds">healthCheckIntervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckTimeoutSeconds">healthCheckTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthyThresholdCount">healthyThresholdCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.unhealthyThresholdCount">unhealthyThresholdCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.matcher"></a>

```java
public VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference getMatcher();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference">VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthCheckIntervalSecondsInput`<sup>Optional</sup> <a name="healthCheckIntervalSecondsInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckIntervalSecondsInput"></a>

```java
public java.lang.Number getHealthCheckIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `healthCheckTimeoutSecondsInput`<sup>Optional</sup> <a name="healthCheckTimeoutSecondsInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckTimeoutSecondsInput"></a>

```java
public java.lang.Number getHealthCheckTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `healthyThresholdCountInput`<sup>Optional</sup> <a name="healthyThresholdCountInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthyThresholdCountInput"></a>

```java
public java.lang.Number getHealthyThresholdCountInput();
```

- *Type:* java.lang.Number

---

##### `matcherInput`<sup>Optional</sup> <a name="matcherInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.matcherInput"></a>

```java
public VpclatticeTargetGroupConfigHealthCheckMatcher getMatcherInput();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckMatcher">VpclatticeTargetGroupConfigHealthCheckMatcher</a>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `protocolVersionInput`<sup>Optional</sup> <a name="protocolVersionInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolVersionInput"></a>

```java
public java.lang.String getProtocolVersionInput();
```

- *Type:* java.lang.String

---

##### `unhealthyThresholdCountInput`<sup>Optional</sup> <a name="unhealthyThresholdCountInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.unhealthyThresholdCountInput"></a>

```java
public java.lang.Number getUnhealthyThresholdCountInput();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthCheckIntervalSeconds`<sup>Required</sup> <a name="healthCheckIntervalSeconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckIntervalSeconds"></a>

```java
public java.lang.Number getHealthCheckIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `healthCheckTimeoutSeconds`<sup>Required</sup> <a name="healthCheckTimeoutSeconds" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthCheckTimeoutSeconds"></a>

```java
public java.lang.Number getHealthCheckTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `healthyThresholdCount`<sup>Required</sup> <a name="healthyThresholdCount" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.healthyThresholdCount"></a>

```java
public java.lang.Number getHealthyThresholdCount();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.protocolVersion"></a>

```java
public java.lang.String getProtocolVersion();
```

- *Type:* java.lang.String

---

##### `unhealthyThresholdCount`<sup>Required</sup> <a name="unhealthyThresholdCount" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.unhealthyThresholdCount"></a>

```java
public java.lang.Number getUnhealthyThresholdCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheckOutputReference.property.internalValue"></a>

```java
public VpclatticeTargetGroupConfigHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupConfigHealthCheck">VpclatticeTargetGroupConfigHealthCheck</a>

---


### VpclatticeTargetGroupTimeoutsOutputReference <a name="VpclatticeTargetGroupTimeoutsOutputReference" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_target_group.VpclatticeTargetGroupTimeoutsOutputReference;

new VpclatticeTargetGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.vpclatticeTargetGroup.VpclatticeTargetGroupTimeouts">VpclatticeTargetGroupTimeouts</a>

---



