# `verifiedpermissionsIdentitySource` Submodule <a name="`verifiedpermissionsIdentitySource` Submodule" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedpermissionsIdentitySource <a name="VerifiedpermissionsIdentitySource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source aws_verifiedpermissions_identity_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySource;

VerifiedpermissionsIdentitySource.Builder.create(Construct scope, java.lang.String id)
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
    .policyStoreId(java.lang.String)
//  .configuration(IResolvable)
//  .configuration(java.util.List<VerifiedpermissionsIdentitySourceConfiguration>)
//  .principalEntityType(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.policyStoreId">policyStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#policy_store_id VerifiedpermissionsIdentitySource#policy_store_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.configuration">configuration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration">VerifiedpermissionsIdentitySourceConfiguration</a>></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.principalEntityType">principalEntityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#principal_entity_type VerifiedpermissionsIdentitySource#principal_entity_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `policyStoreId`<sup>Required</sup> <a name="policyStoreId" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.policyStoreId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#policy_store_id VerifiedpermissionsIdentitySource#policy_store_id}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.configuration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration">VerifiedpermissionsIdentitySourceConfiguration</a>>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#configuration VerifiedpermissionsIdentitySource#configuration}

---

##### `principalEntityType`<sup>Optional</sup> <a name="principalEntityType" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.principalEntityType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#principal_entity_type VerifiedpermissionsIdentitySource#principal_entity_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#region VerifiedpermissionsIdentitySource#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.resetPrincipalEntityType">resetPrincipalEntityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.putConfiguration"></a>

```java
public void putConfiguration(IResolvable OR java.util.List<VerifiedpermissionsIdentitySourceConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.putConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration">VerifiedpermissionsIdentitySourceConfiguration</a>>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetPrincipalEntityType` <a name="resetPrincipalEntityType" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.resetPrincipalEntityType"></a>

```java
public void resetPrincipalEntityType()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VerifiedpermissionsIdentitySource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySource;

VerifiedpermissionsIdentitySource.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySource;

VerifiedpermissionsIdentitySource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySource;

VerifiedpermissionsIdentitySource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySource;

VerifiedpermissionsIdentitySource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VerifiedpermissionsIdentitySource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VerifiedpermissionsIdentitySource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VerifiedpermissionsIdentitySource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VerifiedpermissionsIdentitySource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VerifiedpermissionsIdentitySource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList">VerifiedpermissionsIdentitySourceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.configurationInput">configurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration">VerifiedpermissionsIdentitySourceConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.policyStoreIdInput">policyStoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.principalEntityTypeInput">principalEntityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.policyStoreId">policyStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.principalEntityType">principalEntityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.configuration"></a>

```java
public VerifiedpermissionsIdentitySourceConfigurationList getConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList">VerifiedpermissionsIdentitySourceConfigurationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.configurationInput"></a>

```java
public java.lang.Object getConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration">VerifiedpermissionsIdentitySourceConfiguration</a>>

---

##### `policyStoreIdInput`<sup>Optional</sup> <a name="policyStoreIdInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.policyStoreIdInput"></a>

```java
public java.lang.String getPolicyStoreIdInput();
```

- *Type:* java.lang.String

---

##### `principalEntityTypeInput`<sup>Optional</sup> <a name="principalEntityTypeInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.principalEntityTypeInput"></a>

```java
public java.lang.String getPrincipalEntityTypeInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `policyStoreId`<sup>Required</sup> <a name="policyStoreId" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.policyStoreId"></a>

```java
public java.lang.String getPolicyStoreId();
```

- *Type:* java.lang.String

---

##### `principalEntityType`<sup>Required</sup> <a name="principalEntityType" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.principalEntityType"></a>

```java
public java.lang.String getPrincipalEntityType();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedpermissionsIdentitySourceConfig <a name="VerifiedpermissionsIdentitySourceConfig" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfig;

VerifiedpermissionsIdentitySourceConfig.builder()
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
    .policyStoreId(java.lang.String)
//  .configuration(IResolvable)
//  .configuration(java.util.List<VerifiedpermissionsIdentitySourceConfiguration>)
//  .principalEntityType(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.policyStoreId">policyStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#policy_store_id VerifiedpermissionsIdentitySource#policy_store_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.configuration">configuration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration">VerifiedpermissionsIdentitySourceConfiguration</a>></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.principalEntityType">principalEntityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#principal_entity_type VerifiedpermissionsIdentitySource#principal_entity_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `policyStoreId`<sup>Required</sup> <a name="policyStoreId" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.policyStoreId"></a>

```java
public java.lang.String getPolicyStoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#policy_store_id VerifiedpermissionsIdentitySource#policy_store_id}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.configuration"></a>

```java
public java.lang.Object getConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration">VerifiedpermissionsIdentitySourceConfiguration</a>>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#configuration VerifiedpermissionsIdentitySource#configuration}

---

##### `principalEntityType`<sup>Optional</sup> <a name="principalEntityType" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.principalEntityType"></a>

```java
public java.lang.String getPrincipalEntityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#principal_entity_type VerifiedpermissionsIdentitySource#principal_entity_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#region VerifiedpermissionsIdentitySource#region}

---

### VerifiedpermissionsIdentitySourceConfiguration <a name="VerifiedpermissionsIdentitySourceConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfiguration;

VerifiedpermissionsIdentitySourceConfiguration.builder()
//  .cognitoUserPoolConfiguration(IResolvable)
//  .cognitoUserPoolConfiguration(java.util.List<VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration>)
//  .openIdConnectConfiguration(IResolvable)
//  .openIdConnectConfiguration(java.util.List<VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration.property.cognitoUserPoolConfiguration">cognitoUserPoolConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration</a>></code> | cognito_user_pool_configuration block. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration.property.openIdConnectConfiguration">openIdConnectConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration</a>></code> | open_id_connect_configuration block. |

---

##### `cognitoUserPoolConfiguration`<sup>Optional</sup> <a name="cognitoUserPoolConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration.property.cognitoUserPoolConfiguration"></a>

```java
public java.lang.Object getCognitoUserPoolConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration</a>>

cognito_user_pool_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#cognito_user_pool_configuration VerifiedpermissionsIdentitySource#cognito_user_pool_configuration}

---

##### `openIdConnectConfiguration`<sup>Optional</sup> <a name="openIdConnectConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration.property.openIdConnectConfiguration"></a>

```java
public java.lang.Object getOpenIdConnectConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration</a>>

open_id_connect_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#open_id_connect_configuration VerifiedpermissionsIdentitySource#open_id_connect_configuration}

---

### VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration <a name="VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration;

VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration.builder()
    .userPoolArn(java.lang.String)
//  .clientIds(java.util.List<java.lang.String>)
//  .groupConfiguration(IResolvable)
//  .groupConfiguration(java.util.List<VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration.property.userPoolArn">userPoolArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#user_pool_arn VerifiedpermissionsIdentitySource#user_pool_arn}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration.property.clientIds">clientIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#client_ids VerifiedpermissionsIdentitySource#client_ids}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration.property.groupConfiguration">groupConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration</a>></code> | group_configuration block. |

---

##### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration.property.userPoolArn"></a>

```java
public java.lang.String getUserPoolArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#user_pool_arn VerifiedpermissionsIdentitySource#user_pool_arn}.

---

##### `clientIds`<sup>Optional</sup> <a name="clientIds" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration.property.clientIds"></a>

```java
public java.util.List<java.lang.String> getClientIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#client_ids VerifiedpermissionsIdentitySource#client_ids}.

---

##### `groupConfiguration`<sup>Optional</sup> <a name="groupConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration.property.groupConfiguration"></a>

```java
public java.lang.Object getGroupConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration</a>>

group_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#group_configuration VerifiedpermissionsIdentitySource#group_configuration}

---

### VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration <a name="VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration;

VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration.builder()
    .groupEntityType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration.property.groupEntityType">groupEntityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#group_entity_type VerifiedpermissionsIdentitySource#group_entity_type}. |

---

##### `groupEntityType`<sup>Required</sup> <a name="groupEntityType" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration.property.groupEntityType"></a>

```java
public java.lang.String getGroupEntityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#group_entity_type VerifiedpermissionsIdentitySource#group_entity_type}.

---

### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration;

VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration.builder()
    .issuer(java.lang.String)
//  .entityIdPrefix(java.lang.String)
//  .groupConfiguration(IResolvable)
//  .groupConfiguration(java.util.List<VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration>)
//  .tokenSelection(IResolvable)
//  .tokenSelection(java.util.List<VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#issuer VerifiedpermissionsIdentitySource#issuer}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration.property.entityIdPrefix">entityIdPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#entity_id_prefix VerifiedpermissionsIdentitySource#entity_id_prefix}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration.property.groupConfiguration">groupConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration</a>></code> | group_configuration block. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration.property.tokenSelection">tokenSelection</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection</a>></code> | token_selection block. |

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#issuer VerifiedpermissionsIdentitySource#issuer}.

---

##### `entityIdPrefix`<sup>Optional</sup> <a name="entityIdPrefix" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration.property.entityIdPrefix"></a>

```java
public java.lang.String getEntityIdPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#entity_id_prefix VerifiedpermissionsIdentitySource#entity_id_prefix}.

---

##### `groupConfiguration`<sup>Optional</sup> <a name="groupConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration.property.groupConfiguration"></a>

```java
public java.lang.Object getGroupConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration</a>>

group_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#group_configuration VerifiedpermissionsIdentitySource#group_configuration}

---

##### `tokenSelection`<sup>Optional</sup> <a name="tokenSelection" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration.property.tokenSelection"></a>

```java
public java.lang.Object getTokenSelection();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection</a>>

token_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#token_selection VerifiedpermissionsIdentitySource#token_selection}

---

### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration;

VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration.builder()
    .groupClaim(java.lang.String)
    .groupEntityType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration.property.groupClaim">groupClaim</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#group_claim VerifiedpermissionsIdentitySource#group_claim}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration.property.groupEntityType">groupEntityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#group_entity_type VerifiedpermissionsIdentitySource#group_entity_type}. |

---

##### `groupClaim`<sup>Required</sup> <a name="groupClaim" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration.property.groupClaim"></a>

```java
public java.lang.String getGroupClaim();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#group_claim VerifiedpermissionsIdentitySource#group_claim}.

---

##### `groupEntityType`<sup>Required</sup> <a name="groupEntityType" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration.property.groupEntityType"></a>

```java
public java.lang.String getGroupEntityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#group_entity_type VerifiedpermissionsIdentitySource#group_entity_type}.

---

### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection;

VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection.builder()
//  .accessTokenOnly(IResolvable)
//  .accessTokenOnly(java.util.List<VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly>)
//  .identityTokenOnly(IResolvable)
//  .identityTokenOnly(java.util.List<VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection.property.accessTokenOnly">accessTokenOnly</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly</a>></code> | access_token_only block. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection.property.identityTokenOnly">identityTokenOnly</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly</a>></code> | identity_token_only block. |

---

##### `accessTokenOnly`<sup>Optional</sup> <a name="accessTokenOnly" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection.property.accessTokenOnly"></a>

```java
public java.lang.Object getAccessTokenOnly();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly</a>>

access_token_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#access_token_only VerifiedpermissionsIdentitySource#access_token_only}

---

##### `identityTokenOnly`<sup>Optional</sup> <a name="identityTokenOnly" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection.property.identityTokenOnly"></a>

```java
public java.lang.Object getIdentityTokenOnly();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly</a>>

identity_token_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#identity_token_only VerifiedpermissionsIdentitySource#identity_token_only}

---

### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly;

VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly.builder()
//  .audiences(java.util.List<java.lang.String>)
//  .principalIdClaim(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#audiences VerifiedpermissionsIdentitySource#audiences}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly.property.principalIdClaim">principalIdClaim</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#principal_id_claim VerifiedpermissionsIdentitySource#principal_id_claim}. |

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#audiences VerifiedpermissionsIdentitySource#audiences}.

---

##### `principalIdClaim`<sup>Optional</sup> <a name="principalIdClaim" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly.property.principalIdClaim"></a>

```java
public java.lang.String getPrincipalIdClaim();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#principal_id_claim VerifiedpermissionsIdentitySource#principal_id_claim}.

---

### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly;

VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly.builder()
//  .clientIds(java.util.List<java.lang.String>)
//  .principalIdClaim(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly.property.clientIds">clientIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#client_ids VerifiedpermissionsIdentitySource#client_ids}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly.property.principalIdClaim">principalIdClaim</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#principal_id_claim VerifiedpermissionsIdentitySource#principal_id_claim}. |

---

##### `clientIds`<sup>Optional</sup> <a name="clientIds" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly.property.clientIds"></a>

```java
public java.util.List<java.lang.String> getClientIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#client_ids VerifiedpermissionsIdentitySource#client_ids}.

---

##### `principalIdClaim`<sup>Optional</sup> <a name="principalIdClaim" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly.property.principalIdClaim"></a>

```java
public java.lang.String getPrincipalIdClaim();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/verifiedpermissions_identity_source#principal_id_claim VerifiedpermissionsIdentitySource#principal_id_claim}.

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList <a name="VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList;

new VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.get"></a>

```java
public VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration</a>>

---


### VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference <a name="VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference;

new VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.groupEntityTypeInput">groupEntityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.groupEntityType">groupEntityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupEntityTypeInput`<sup>Optional</sup> <a name="groupEntityTypeInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.groupEntityTypeInput"></a>

```java
public java.lang.String getGroupEntityTypeInput();
```

- *Type:* java.lang.String

---

##### `groupEntityType`<sup>Required</sup> <a name="groupEntityType" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.groupEntityType"></a>

```java
public java.lang.String getGroupEntityType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration</a>

---


### VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList <a name="VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList;

new VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.get"></a>

```java
public VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration</a>>

---


### VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference <a name="VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference;

new VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.putGroupConfiguration">putGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.resetClientIds">resetClientIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.resetGroupConfiguration">resetGroupConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroupConfiguration` <a name="putGroupConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.putGroupConfiguration"></a>

```java
public void putGroupConfiguration(IResolvable OR java.util.List<VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.putGroupConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration</a>>

---

##### `resetClientIds` <a name="resetClientIds" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.resetClientIds"></a>

```java
public void resetClientIds()
```

##### `resetGroupConfiguration` <a name="resetGroupConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.resetGroupConfiguration"></a>

```java
public void resetGroupConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.groupConfiguration">groupConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.clientIdsInput">clientIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.groupConfigurationInput">groupConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.userPoolArnInput">userPoolArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.clientIds">clientIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.userPoolArn">userPoolArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupConfiguration`<sup>Required</sup> <a name="groupConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.groupConfiguration"></a>

```java
public VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList getGroupConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList</a>

---

##### `clientIdsInput`<sup>Optional</sup> <a name="clientIdsInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.clientIdsInput"></a>

```java
public java.util.List<java.lang.String> getClientIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupConfigurationInput`<sup>Optional</sup> <a name="groupConfigurationInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.groupConfigurationInput"></a>

```java
public java.lang.Object getGroupConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration</a>>

---

##### `userPoolArnInput`<sup>Optional</sup> <a name="userPoolArnInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.userPoolArnInput"></a>

```java
public java.lang.String getUserPoolArnInput();
```

- *Type:* java.lang.String

---

##### `clientIds`<sup>Required</sup> <a name="clientIds" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.clientIds"></a>

```java
public java.util.List<java.lang.String> getClientIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.userPoolArn"></a>

```java
public java.lang.String getUserPoolArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration</a>

---


### VerifiedpermissionsIdentitySourceConfigurationList <a name="VerifiedpermissionsIdentitySourceConfigurationList" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationList;

new VerifiedpermissionsIdentitySourceConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.get"></a>

```java
public VerifiedpermissionsIdentitySourceConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration">VerifiedpermissionsIdentitySourceConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration">VerifiedpermissionsIdentitySourceConfiguration</a>>

---


### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList;

new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.get"></a>

```java
public VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration</a>>

---


### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference;

new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupClaimInput">groupClaimInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupEntityTypeInput">groupEntityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupClaim">groupClaim</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupEntityType">groupEntityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupClaimInput`<sup>Optional</sup> <a name="groupClaimInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupClaimInput"></a>

```java
public java.lang.String getGroupClaimInput();
```

- *Type:* java.lang.String

---

##### `groupEntityTypeInput`<sup>Optional</sup> <a name="groupEntityTypeInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupEntityTypeInput"></a>

```java
public java.lang.String getGroupEntityTypeInput();
```

- *Type:* java.lang.String

---

##### `groupClaim`<sup>Required</sup> <a name="groupClaim" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupClaim"></a>

```java
public java.lang.String getGroupClaim();
```

- *Type:* java.lang.String

---

##### `groupEntityType`<sup>Required</sup> <a name="groupEntityType" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.groupEntityType"></a>

```java
public java.lang.String getGroupEntityType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration</a>

---


### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList;

new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.get"></a>

```java
public VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration</a>>

---


### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference;

new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.putGroupConfiguration">putGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.putTokenSelection">putTokenSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resetEntityIdPrefix">resetEntityIdPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resetGroupConfiguration">resetGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resetTokenSelection">resetTokenSelection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroupConfiguration` <a name="putGroupConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.putGroupConfiguration"></a>

```java
public void putGroupConfiguration(IResolvable OR java.util.List<VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.putGroupConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration</a>>

---

##### `putTokenSelection` <a name="putTokenSelection" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.putTokenSelection"></a>

```java
public void putTokenSelection(IResolvable OR java.util.List<VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.putTokenSelection.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection</a>>

---

##### `resetEntityIdPrefix` <a name="resetEntityIdPrefix" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resetEntityIdPrefix"></a>

```java
public void resetEntityIdPrefix()
```

##### `resetGroupConfiguration` <a name="resetGroupConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resetGroupConfiguration"></a>

```java
public void resetGroupConfiguration()
```

##### `resetTokenSelection` <a name="resetTokenSelection" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.resetTokenSelection"></a>

```java
public void resetTokenSelection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.groupConfiguration">groupConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.tokenSelection">tokenSelection</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.entityIdPrefixInput">entityIdPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.groupConfigurationInput">groupConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.tokenSelectionInput">tokenSelectionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.entityIdPrefix">entityIdPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupConfiguration`<sup>Required</sup> <a name="groupConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.groupConfiguration"></a>

```java
public VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList getGroupConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList</a>

---

##### `tokenSelection`<sup>Required</sup> <a name="tokenSelection" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.tokenSelection"></a>

```java
public VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList getTokenSelection();
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList</a>

---

##### `entityIdPrefixInput`<sup>Optional</sup> <a name="entityIdPrefixInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.entityIdPrefixInput"></a>

```java
public java.lang.String getEntityIdPrefixInput();
```

- *Type:* java.lang.String

---

##### `groupConfigurationInput`<sup>Optional</sup> <a name="groupConfigurationInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.groupConfigurationInput"></a>

```java
public java.lang.Object getGroupConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration</a>>

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `tokenSelectionInput`<sup>Optional</sup> <a name="tokenSelectionInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.tokenSelectionInput"></a>

```java
public java.lang.Object getTokenSelectionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection</a>>

---

##### `entityIdPrefix`<sup>Required</sup> <a name="entityIdPrefix" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.entityIdPrefix"></a>

```java
public java.lang.String getEntityIdPrefix();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration</a>

---


### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList;

new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.get"></a>

```java
public VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly</a>>

---


### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference;

new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.resetAudiences">resetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.resetPrincipalIdClaim">resetPrincipalIdClaim</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudiences` <a name="resetAudiences" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.resetAudiences"></a>

```java
public void resetAudiences()
```

##### `resetPrincipalIdClaim` <a name="resetPrincipalIdClaim" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.resetPrincipalIdClaim"></a>

```java
public void resetPrincipalIdClaim()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.audiencesInput">audiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.principalIdClaimInput">principalIdClaimInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.principalIdClaim">principalIdClaim</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.audiencesInput"></a>

```java
public java.util.List<java.lang.String> getAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalIdClaimInput`<sup>Optional</sup> <a name="principalIdClaimInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.principalIdClaimInput"></a>

```java
public java.lang.String getPrincipalIdClaimInput();
```

- *Type:* java.lang.String

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalIdClaim`<sup>Required</sup> <a name="principalIdClaim" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.principalIdClaim"></a>

```java
public java.lang.String getPrincipalIdClaim();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly</a>

---


### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList;

new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.get"></a>

```java
public VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly</a>>

---


### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference;

new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.resetClientIds">resetClientIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.resetPrincipalIdClaim">resetPrincipalIdClaim</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientIds` <a name="resetClientIds" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.resetClientIds"></a>

```java
public void resetClientIds()
```

##### `resetPrincipalIdClaim` <a name="resetPrincipalIdClaim" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.resetPrincipalIdClaim"></a>

```java
public void resetPrincipalIdClaim()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.clientIdsInput">clientIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.principalIdClaimInput">principalIdClaimInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.clientIds">clientIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.principalIdClaim">principalIdClaim</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdsInput`<sup>Optional</sup> <a name="clientIdsInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.clientIdsInput"></a>

```java
public java.util.List<java.lang.String> getClientIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalIdClaimInput`<sup>Optional</sup> <a name="principalIdClaimInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.principalIdClaimInput"></a>

```java
public java.lang.String getPrincipalIdClaimInput();
```

- *Type:* java.lang.String

---

##### `clientIds`<sup>Required</sup> <a name="clientIds" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.clientIds"></a>

```java
public java.util.List<java.lang.String> getClientIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalIdClaim`<sup>Required</sup> <a name="principalIdClaim" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.principalIdClaim"></a>

```java
public java.lang.String getPrincipalIdClaim();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly</a>

---


### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList;

new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.get"></a>

```java
public VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection</a>>

---


### VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference <a name="VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference;

new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.putAccessTokenOnly">putAccessTokenOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.putIdentityTokenOnly">putIdentityTokenOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.resetAccessTokenOnly">resetAccessTokenOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.resetIdentityTokenOnly">resetIdentityTokenOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessTokenOnly` <a name="putAccessTokenOnly" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.putAccessTokenOnly"></a>

```java
public void putAccessTokenOnly(IResolvable OR java.util.List<VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.putAccessTokenOnly.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly</a>>

---

##### `putIdentityTokenOnly` <a name="putIdentityTokenOnly" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.putIdentityTokenOnly"></a>

```java
public void putIdentityTokenOnly(IResolvable OR java.util.List<VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.putIdentityTokenOnly.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly</a>>

---

##### `resetAccessTokenOnly` <a name="resetAccessTokenOnly" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.resetAccessTokenOnly"></a>

```java
public void resetAccessTokenOnly()
```

##### `resetIdentityTokenOnly` <a name="resetIdentityTokenOnly" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.resetIdentityTokenOnly"></a>

```java
public void resetIdentityTokenOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.accessTokenOnly">accessTokenOnly</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.identityTokenOnly">identityTokenOnly</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.accessTokenOnlyInput">accessTokenOnlyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.identityTokenOnlyInput">identityTokenOnlyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessTokenOnly`<sup>Required</sup> <a name="accessTokenOnly" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.accessTokenOnly"></a>

```java
public VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList getAccessTokenOnly();
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList</a>

---

##### `identityTokenOnly`<sup>Required</sup> <a name="identityTokenOnly" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.identityTokenOnly"></a>

```java
public VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList getIdentityTokenOnly();
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList</a>

---

##### `accessTokenOnlyInput`<sup>Optional</sup> <a name="accessTokenOnlyInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.accessTokenOnlyInput"></a>

```java
public java.lang.Object getAccessTokenOnlyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly</a>>

---

##### `identityTokenOnlyInput`<sup>Optional</sup> <a name="identityTokenOnlyInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.identityTokenOnlyInput"></a>

```java
public java.lang.Object getIdentityTokenOnlyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection</a>

---


### VerifiedpermissionsIdentitySourceConfigurationOutputReference <a name="VerifiedpermissionsIdentitySourceConfigurationOutputReference" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.verifiedpermissions_identity_source.VerifiedpermissionsIdentitySourceConfigurationOutputReference;

new VerifiedpermissionsIdentitySourceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.putCognitoUserPoolConfiguration">putCognitoUserPoolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.putOpenIdConnectConfiguration">putOpenIdConnectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.resetCognitoUserPoolConfiguration">resetCognitoUserPoolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.resetOpenIdConnectConfiguration">resetOpenIdConnectConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCognitoUserPoolConfiguration` <a name="putCognitoUserPoolConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.putCognitoUserPoolConfiguration"></a>

```java
public void putCognitoUserPoolConfiguration(IResolvable OR java.util.List<VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.putCognitoUserPoolConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration</a>>

---

##### `putOpenIdConnectConfiguration` <a name="putOpenIdConnectConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.putOpenIdConnectConfiguration"></a>

```java
public void putOpenIdConnectConfiguration(IResolvable OR java.util.List<VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.putOpenIdConnectConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration</a>>

---

##### `resetCognitoUserPoolConfiguration` <a name="resetCognitoUserPoolConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.resetCognitoUserPoolConfiguration"></a>

```java
public void resetCognitoUserPoolConfiguration()
```

##### `resetOpenIdConnectConfiguration` <a name="resetOpenIdConnectConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.resetOpenIdConnectConfiguration"></a>

```java
public void resetOpenIdConnectConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.cognitoUserPoolConfiguration">cognitoUserPoolConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.openIdConnectConfiguration">openIdConnectConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.cognitoUserPoolConfigurationInput">cognitoUserPoolConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.openIdConnectConfigurationInput">openIdConnectConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration">VerifiedpermissionsIdentitySourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cognitoUserPoolConfiguration`<sup>Required</sup> <a name="cognitoUserPoolConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.cognitoUserPoolConfiguration"></a>

```java
public VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList getCognitoUserPoolConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList</a>

---

##### `openIdConnectConfiguration`<sup>Required</sup> <a name="openIdConnectConfiguration" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.openIdConnectConfiguration"></a>

```java
public VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList getOpenIdConnectConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList</a>

---

##### `cognitoUserPoolConfigurationInput`<sup>Optional</sup> <a name="cognitoUserPoolConfigurationInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.cognitoUserPoolConfigurationInput"></a>

```java
public java.lang.Object getCognitoUserPoolConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration">VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration</a>>

---

##### `openIdConnectConfigurationInput`<sup>Optional</sup> <a name="openIdConnectConfigurationInput" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.openIdConnectConfigurationInput"></a>

```java
public java.lang.Object getOpenIdConnectConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration">VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.verifiedpermissionsIdentitySource.VerifiedpermissionsIdentitySourceConfiguration">VerifiedpermissionsIdentitySourceConfiguration</a>

---



