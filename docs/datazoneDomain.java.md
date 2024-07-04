# `datazoneDomain` Submodule <a name="`datazoneDomain` Submodule" id="@cdktf/provider-aws.datazoneDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneDomain <a name="DatazoneDomain" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain aws_datazone_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_domain.DatazoneDomain;

DatazoneDomain.Builder.create(Construct scope, java.lang.String id)
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
    .domainExecutionRole(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .kmsKeyIdentifier(java.lang.String)
//  .singleSignOn(IResolvable)
//  .singleSignOn(java.util.List<DatazoneDomainSingleSignOn>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DatazoneDomainTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.domainExecutionRole">domainExecutionRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#domain_execution_role DatazoneDomain#domain_execution_role}. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#name DatazoneDomain#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#description DatazoneDomain#description}. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#kms_key_identifier DatazoneDomain#kms_key_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.singleSignOn">singleSignOn</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a>></code> | single_sign_on block. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#tags DatazoneDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts">DatazoneDomainTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainExecutionRole`<sup>Required</sup> <a name="domainExecutionRole" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.domainExecutionRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#domain_execution_role DatazoneDomain#domain_execution_role}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#name DatazoneDomain#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#description DatazoneDomain#description}.

---

##### `kmsKeyIdentifier`<sup>Optional</sup> <a name="kmsKeyIdentifier" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.kmsKeyIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#kms_key_identifier DatazoneDomain#kms_key_identifier}.

---

##### `singleSignOn`<sup>Optional</sup> <a name="singleSignOn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.singleSignOn"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a>>

single_sign_on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#single_sign_on DatazoneDomain#single_sign_on}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#tags DatazoneDomain#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts">DatazoneDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#timeouts DatazoneDomain#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.putSingleSignOn">putSingleSignOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetKmsKeyIdentifier">resetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetSingleSignOn">resetSingleSignOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSingleSignOn` <a name="putSingleSignOn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.putSingleSignOn"></a>

```java
public void putSingleSignOn(IResolvable OR java.util.List<DatazoneDomainSingleSignOn> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.putSingleSignOn.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.putTimeouts"></a>

```java
public void putTimeouts(DatazoneDomainTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts">DatazoneDomainTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetKmsKeyIdentifier` <a name="resetKmsKeyIdentifier" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetKmsKeyIdentifier"></a>

```java
public void resetKmsKeyIdentifier()
```

##### `resetSingleSignOn` <a name="resetSingleSignOn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetSingleSignOn"></a>

```java
public void resetSingleSignOn()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatazoneDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_domain.DatazoneDomain;

DatazoneDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_domain.DatazoneDomain;

DatazoneDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_domain.DatazoneDomain;

DatazoneDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_domain.DatazoneDomain;

DatazoneDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatazoneDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatazoneDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatazoneDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatazoneDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatazoneDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.portalUrl">portalUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.singleSignOn">singleSignOn</a></code> | <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList">DatazoneDomainSingleSignOnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference">DatazoneDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.domainExecutionRoleInput">domainExecutionRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.kmsKeyIdentifierInput">kmsKeyIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.singleSignOnInput">singleSignOnInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts">DatazoneDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.domainExecutionRole">domainExecutionRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `portalUrl`<sup>Required</sup> <a name="portalUrl" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.portalUrl"></a>

```java
public java.lang.String getPortalUrl();
```

- *Type:* java.lang.String

---

##### `singleSignOn`<sup>Required</sup> <a name="singleSignOn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.singleSignOn"></a>

```java
public DatazoneDomainSingleSignOnList getSingleSignOn();
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList">DatazoneDomainSingleSignOnList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.timeouts"></a>

```java
public DatazoneDomainTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference">DatazoneDomainTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `domainExecutionRoleInput`<sup>Optional</sup> <a name="domainExecutionRoleInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.domainExecutionRoleInput"></a>

```java
public java.lang.String getDomainExecutionRoleInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdentifierInput`<sup>Optional</sup> <a name="kmsKeyIdentifierInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.kmsKeyIdentifierInput"></a>

```java
public java.lang.String getKmsKeyIdentifierInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `singleSignOnInput`<sup>Optional</sup> <a name="singleSignOnInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.singleSignOnInput"></a>

```java
public java.lang.Object getSingleSignOnInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts">DatazoneDomainTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainExecutionRole`<sup>Required</sup> <a name="domainExecutionRole" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.domainExecutionRole"></a>

```java
public java.lang.String getDomainExecutionRole();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdentifier`<sup>Required</sup> <a name="kmsKeyIdentifier" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.kmsKeyIdentifier"></a>

```java
public java.lang.String getKmsKeyIdentifier();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneDomainConfig <a name="DatazoneDomainConfig" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_domain.DatazoneDomainConfig;

DatazoneDomainConfig.builder()
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
    .domainExecutionRole(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .kmsKeyIdentifier(java.lang.String)
//  .singleSignOn(IResolvable)
//  .singleSignOn(java.util.List<DatazoneDomainSingleSignOn>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DatazoneDomainTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.domainExecutionRole">domainExecutionRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#domain_execution_role DatazoneDomain#domain_execution_role}. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#name DatazoneDomain#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#description DatazoneDomain#description}. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#kms_key_identifier DatazoneDomain#kms_key_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.singleSignOn">singleSignOn</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a>></code> | single_sign_on block. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#tags DatazoneDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts">DatazoneDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainExecutionRole`<sup>Required</sup> <a name="domainExecutionRole" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.domainExecutionRole"></a>

```java
public java.lang.String getDomainExecutionRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#domain_execution_role DatazoneDomain#domain_execution_role}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#name DatazoneDomain#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#description DatazoneDomain#description}.

---

##### `kmsKeyIdentifier`<sup>Optional</sup> <a name="kmsKeyIdentifier" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.kmsKeyIdentifier"></a>

```java
public java.lang.String getKmsKeyIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#kms_key_identifier DatazoneDomain#kms_key_identifier}.

---

##### `singleSignOn`<sup>Optional</sup> <a name="singleSignOn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.singleSignOn"></a>

```java
public java.lang.Object getSingleSignOn();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a>>

single_sign_on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#single_sign_on DatazoneDomain#single_sign_on}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#tags DatazoneDomain#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainConfig.property.timeouts"></a>

```java
public DatazoneDomainTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts">DatazoneDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#timeouts DatazoneDomain#timeouts}

---

### DatazoneDomainSingleSignOn <a name="DatazoneDomainSingleSignOn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_domain.DatazoneDomainSingleSignOn;

DatazoneDomainSingleSignOn.builder()
//  .type(java.lang.String)
//  .userAssignment(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#type DatazoneDomain#type}. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn.property.userAssignment">userAssignment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#user_assignment DatazoneDomain#user_assignment}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#type DatazoneDomain#type}.

---

##### `userAssignment`<sup>Optional</sup> <a name="userAssignment" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn.property.userAssignment"></a>

```java
public java.lang.String getUserAssignment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#user_assignment DatazoneDomain#user_assignment}.

---

### DatazoneDomainTimeouts <a name="DatazoneDomainTimeouts" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_domain.DatazoneDomainTimeouts;

DatazoneDomainTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#create DatazoneDomain#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/datazone_domain#delete DatazoneDomain#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneDomainSingleSignOnList <a name="DatazoneDomainSingleSignOnList" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_domain.DatazoneDomainSingleSignOnList;

new DatazoneDomainSingleSignOnList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.get"></a>

```java
public DatazoneDomainSingleSignOnOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a>>

---


### DatazoneDomainSingleSignOnOutputReference <a name="DatazoneDomainSingleSignOnOutputReference" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_domain.DatazoneDomainSingleSignOnOutputReference;

new DatazoneDomainSingleSignOnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resetUserAssignment">resetUserAssignment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetUserAssignment` <a name="resetUserAssignment" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resetUserAssignment"></a>

```java
public void resetUserAssignment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.userAssignmentInput">userAssignmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.userAssignment">userAssignment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `userAssignmentInput`<sup>Optional</sup> <a name="userAssignmentInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.userAssignmentInput"></a>

```java
public java.lang.String getUserAssignmentInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userAssignment`<sup>Required</sup> <a name="userAssignment" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.userAssignment"></a>

```java
public java.lang.String getUserAssignment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a>

---


### DatazoneDomainTimeoutsOutputReference <a name="DatazoneDomainTimeoutsOutputReference" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_domain.DatazoneDomainTimeoutsOutputReference;

new DatazoneDomainTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts">DatazoneDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.datazoneDomain.DatazoneDomainTimeouts">DatazoneDomainTimeouts</a>

---



