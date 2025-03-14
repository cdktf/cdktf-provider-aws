# `vpclatticeServiceNetworkResourceAssociation` Submodule <a name="`vpclatticeServiceNetworkResourceAssociation` Submodule" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeServiceNetworkResourceAssociation <a name="VpclatticeServiceNetworkResourceAssociation" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association aws_vpclattice_service_network_resource_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_service_network_resource_association.VpclatticeServiceNetworkResourceAssociation;

VpclatticeServiceNetworkResourceAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .resourceConfigurationIdentifier(java.lang.String)
    .serviceNetworkIdentifier(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VpclatticeServiceNetworkResourceAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.resourceConfigurationIdentifier">resourceConfigurationIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#resource_configuration_identifier VpclatticeServiceNetworkResourceAssociation#resource_configuration_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.serviceNetworkIdentifier">serviceNetworkIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#service_network_identifier VpclatticeServiceNetworkResourceAssociation#service_network_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#tags VpclatticeServiceNetworkResourceAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts">VpclatticeServiceNetworkResourceAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `resourceConfigurationIdentifier`<sup>Required</sup> <a name="resourceConfigurationIdentifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.resourceConfigurationIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#resource_configuration_identifier VpclatticeServiceNetworkResourceAssociation#resource_configuration_identifier}.

---

##### `serviceNetworkIdentifier`<sup>Required</sup> <a name="serviceNetworkIdentifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.serviceNetworkIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#service_network_identifier VpclatticeServiceNetworkResourceAssociation#service_network_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#tags VpclatticeServiceNetworkResourceAssociation#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts">VpclatticeServiceNetworkResourceAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#timeouts VpclatticeServiceNetworkResourceAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.putTimeouts"></a>

```java
public void putTimeouts(VpclatticeServiceNetworkResourceAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts">VpclatticeServiceNetworkResourceAssociationTimeouts</a>

---

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpclatticeServiceNetworkResourceAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_service_network_resource_association.VpclatticeServiceNetworkResourceAssociation;

VpclatticeServiceNetworkResourceAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_service_network_resource_association.VpclatticeServiceNetworkResourceAssociation;

VpclatticeServiceNetworkResourceAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_service_network_resource_association.VpclatticeServiceNetworkResourceAssociation;

VpclatticeServiceNetworkResourceAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_service_network_resource_association.VpclatticeServiceNetworkResourceAssociation;

VpclatticeServiceNetworkResourceAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VpclatticeServiceNetworkResourceAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VpclatticeServiceNetworkResourceAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VpclatticeServiceNetworkResourceAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VpclatticeServiceNetworkResourceAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VpclatticeServiceNetworkResourceAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.dnsEntry">dnsEntry</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList">VpclatticeServiceNetworkResourceAssociationDnsEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference">VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.resourceConfigurationIdentifierInput">resourceConfigurationIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.serviceNetworkIdentifierInput">serviceNetworkIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts">VpclatticeServiceNetworkResourceAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.resourceConfigurationIdentifier">resourceConfigurationIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.serviceNetworkIdentifier">serviceNetworkIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `dnsEntry`<sup>Required</sup> <a name="dnsEntry" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.dnsEntry"></a>

```java
public VpclatticeServiceNetworkResourceAssociationDnsEntryList getDnsEntry();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList">VpclatticeServiceNetworkResourceAssociationDnsEntryList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.timeouts"></a>

```java
public VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference">VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference</a>

---

##### `resourceConfigurationIdentifierInput`<sup>Optional</sup> <a name="resourceConfigurationIdentifierInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.resourceConfigurationIdentifierInput"></a>

```java
public java.lang.String getResourceConfigurationIdentifierInput();
```

- *Type:* java.lang.String

---

##### `serviceNetworkIdentifierInput`<sup>Optional</sup> <a name="serviceNetworkIdentifierInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.serviceNetworkIdentifierInput"></a>

```java
public java.lang.String getServiceNetworkIdentifierInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts">VpclatticeServiceNetworkResourceAssociationTimeouts</a>

---

##### `resourceConfigurationIdentifier`<sup>Required</sup> <a name="resourceConfigurationIdentifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.resourceConfigurationIdentifier"></a>

```java
public java.lang.String getResourceConfigurationIdentifier();
```

- *Type:* java.lang.String

---

##### `serviceNetworkIdentifier`<sup>Required</sup> <a name="serviceNetworkIdentifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.serviceNetworkIdentifier"></a>

```java
public java.lang.String getServiceNetworkIdentifier();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeServiceNetworkResourceAssociationConfig <a name="VpclatticeServiceNetworkResourceAssociationConfig" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_service_network_resource_association.VpclatticeServiceNetworkResourceAssociationConfig;

VpclatticeServiceNetworkResourceAssociationConfig.builder()
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
    .resourceConfigurationIdentifier(java.lang.String)
    .serviceNetworkIdentifier(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VpclatticeServiceNetworkResourceAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.resourceConfigurationIdentifier">resourceConfigurationIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#resource_configuration_identifier VpclatticeServiceNetworkResourceAssociation#resource_configuration_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.serviceNetworkIdentifier">serviceNetworkIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#service_network_identifier VpclatticeServiceNetworkResourceAssociation#service_network_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#tags VpclatticeServiceNetworkResourceAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts">VpclatticeServiceNetworkResourceAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `resourceConfigurationIdentifier`<sup>Required</sup> <a name="resourceConfigurationIdentifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.resourceConfigurationIdentifier"></a>

```java
public java.lang.String getResourceConfigurationIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#resource_configuration_identifier VpclatticeServiceNetworkResourceAssociation#resource_configuration_identifier}.

---

##### `serviceNetworkIdentifier`<sup>Required</sup> <a name="serviceNetworkIdentifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.serviceNetworkIdentifier"></a>

```java
public java.lang.String getServiceNetworkIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#service_network_identifier VpclatticeServiceNetworkResourceAssociation#service_network_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#tags VpclatticeServiceNetworkResourceAssociation#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.timeouts"></a>

```java
public VpclatticeServiceNetworkResourceAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts">VpclatticeServiceNetworkResourceAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#timeouts VpclatticeServiceNetworkResourceAssociation#timeouts}

---

### VpclatticeServiceNetworkResourceAssociationDnsEntry <a name="VpclatticeServiceNetworkResourceAssociationDnsEntry" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_service_network_resource_association.VpclatticeServiceNetworkResourceAssociationDnsEntry;

VpclatticeServiceNetworkResourceAssociationDnsEntry.builder()
    .build();
```


### VpclatticeServiceNetworkResourceAssociationTimeouts <a name="VpclatticeServiceNetworkResourceAssociationTimeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_service_network_resource_association.VpclatticeServiceNetworkResourceAssociationTimeouts;

VpclatticeServiceNetworkResourceAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#create VpclatticeServiceNetworkResourceAssociation#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#delete VpclatticeServiceNetworkResourceAssociation#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeServiceNetworkResourceAssociationDnsEntryList <a name="VpclatticeServiceNetworkResourceAssociationDnsEntryList" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_service_network_resource_association.VpclatticeServiceNetworkResourceAssociationDnsEntryList;

new VpclatticeServiceNetworkResourceAssociationDnsEntryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.get"></a>

```java
public VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference <a name="VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_service_network_resource_association.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference;

new VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntry">VpclatticeServiceNetworkResourceAssociationDnsEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.internalValue"></a>

```java
public VpclatticeServiceNetworkResourceAssociationDnsEntry getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntry">VpclatticeServiceNetworkResourceAssociationDnsEntry</a>

---


### VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference <a name="VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpclattice_service_network_resource_association.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference;

new VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts">VpclatticeServiceNetworkResourceAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts">VpclatticeServiceNetworkResourceAssociationTimeouts</a>

---



