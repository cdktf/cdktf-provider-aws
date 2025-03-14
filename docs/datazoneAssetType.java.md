# `datazoneAssetType` Submodule <a name="`datazoneAssetType` Submodule" id="@cdktf/provider-aws.datazoneAssetType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneAssetType <a name="DatazoneAssetType" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type aws_datazone_asset_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_asset_type.DatazoneAssetType;

DatazoneAssetType.Builder.create(Construct scope, java.lang.String id)
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
    .domainIdentifier(java.lang.String)
    .name(java.lang.String)
    .owningProjectIdentifier(java.lang.String)
//  .description(java.lang.String)
//  .formsInput(IResolvable)
//  .formsInput(java.util.List<DatazoneAssetTypeFormsInput>)
//  .timeouts(DatazoneAssetTypeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#domain_identifier DatazoneAssetType#domain_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#name DatazoneAssetType#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.owningProjectIdentifier">owningProjectIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#owning_project_identifier DatazoneAssetType#owning_project_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#description DatazoneAssetType#description}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.formsInput">formsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a>></code> | forms_input block. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts">DatazoneAssetTypeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.domainIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#domain_identifier DatazoneAssetType#domain_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#name DatazoneAssetType#name}.

---

##### `owningProjectIdentifier`<sup>Required</sup> <a name="owningProjectIdentifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.owningProjectIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#owning_project_identifier DatazoneAssetType#owning_project_identifier}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#description DatazoneAssetType#description}.

---

##### `formsInput`<sup>Optional</sup> <a name="formsInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.formsInput"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a>>

forms_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#forms_input DatazoneAssetType#forms_input}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts">DatazoneAssetTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#timeouts DatazoneAssetType#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.putFormsInput">putFormsInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetFormsInput">resetFormsInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFormsInput` <a name="putFormsInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.putFormsInput"></a>

```java
public void putFormsInput(IResolvable OR java.util.List<DatazoneAssetTypeFormsInput> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.putFormsInput.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.putTimeouts"></a>

```java
public void putTimeouts(DatazoneAssetTypeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts">DatazoneAssetTypeTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFormsInput` <a name="resetFormsInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetFormsInput"></a>

```java
public void resetFormsInput()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatazoneAssetType resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_asset_type.DatazoneAssetType;

DatazoneAssetType.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_asset_type.DatazoneAssetType;

DatazoneAssetType.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_asset_type.DatazoneAssetType;

DatazoneAssetType.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_asset_type.DatazoneAssetType;

DatazoneAssetType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatazoneAssetType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatazoneAssetType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatazoneAssetType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatazoneAssetType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatazoneAssetType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.formsInput">formsInput</a></code> | <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList">DatazoneAssetTypeFormsInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference">DatazoneAssetTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.domainIdentifierInput">domainIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.formsInputInput">formsInputInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.owningProjectIdentifierInput">owningProjectIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts">DatazoneAssetTypeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.owningProjectIdentifier">owningProjectIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `formsInput`<sup>Required</sup> <a name="formsInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.formsInput"></a>

```java
public DatazoneAssetTypeFormsInputList getFormsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList">DatazoneAssetTypeFormsInputList</a>

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.timeouts"></a>

```java
public DatazoneAssetTypeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference">DatazoneAssetTypeTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `domainIdentifierInput`<sup>Optional</sup> <a name="domainIdentifierInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.domainIdentifierInput"></a>

```java
public java.lang.String getDomainIdentifierInput();
```

- *Type:* java.lang.String

---

##### `formsInputInput`<sup>Optional</sup> <a name="formsInputInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.formsInputInput"></a>

```java
public java.lang.Object getFormsInputInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `owningProjectIdentifierInput`<sup>Optional</sup> <a name="owningProjectIdentifierInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.owningProjectIdentifierInput"></a>

```java
public java.lang.String getOwningProjectIdentifierInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts">DatazoneAssetTypeTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.domainIdentifier"></a>

```java
public java.lang.String getDomainIdentifier();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owningProjectIdentifier`<sup>Required</sup> <a name="owningProjectIdentifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.owningProjectIdentifier"></a>

```java
public java.lang.String getOwningProjectIdentifier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneAssetTypeConfig <a name="DatazoneAssetTypeConfig" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_asset_type.DatazoneAssetTypeConfig;

DatazoneAssetTypeConfig.builder()
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
    .domainIdentifier(java.lang.String)
    .name(java.lang.String)
    .owningProjectIdentifier(java.lang.String)
//  .description(java.lang.String)
//  .formsInput(IResolvable)
//  .formsInput(java.util.List<DatazoneAssetTypeFormsInput>)
//  .timeouts(DatazoneAssetTypeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#domain_identifier DatazoneAssetType#domain_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#name DatazoneAssetType#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.owningProjectIdentifier">owningProjectIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#owning_project_identifier DatazoneAssetType#owning_project_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#description DatazoneAssetType#description}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.formsInput">formsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a>></code> | forms_input block. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts">DatazoneAssetTypeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.domainIdentifier"></a>

```java
public java.lang.String getDomainIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#domain_identifier DatazoneAssetType#domain_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#name DatazoneAssetType#name}.

---

##### `owningProjectIdentifier`<sup>Required</sup> <a name="owningProjectIdentifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.owningProjectIdentifier"></a>

```java
public java.lang.String getOwningProjectIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#owning_project_identifier DatazoneAssetType#owning_project_identifier}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#description DatazoneAssetType#description}.

---

##### `formsInput`<sup>Optional</sup> <a name="formsInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.formsInput"></a>

```java
public java.lang.Object getFormsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a>>

forms_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#forms_input DatazoneAssetType#forms_input}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.timeouts"></a>

```java
public DatazoneAssetTypeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts">DatazoneAssetTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#timeouts DatazoneAssetType#timeouts}

---

### DatazoneAssetTypeFormsInput <a name="DatazoneAssetTypeFormsInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_asset_type.DatazoneAssetTypeFormsInput;

DatazoneAssetTypeFormsInput.builder()
    .mapBlockKey(java.lang.String)
    .typeIdentifier(java.lang.String)
    .typeRevision(java.lang.String)
//  .required(java.lang.Boolean)
//  .required(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.mapBlockKey">mapBlockKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#map_block_key DatazoneAssetType#map_block_key}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.typeIdentifier">typeIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#type_identifier DatazoneAssetType#type_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.typeRevision">typeRevision</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#type_revision DatazoneAssetType#type_revision}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#required DatazoneAssetType#required}. |

---

##### `mapBlockKey`<sup>Required</sup> <a name="mapBlockKey" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.mapBlockKey"></a>

```java
public java.lang.String getMapBlockKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#map_block_key DatazoneAssetType#map_block_key}.

---

##### `typeIdentifier`<sup>Required</sup> <a name="typeIdentifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.typeIdentifier"></a>

```java
public java.lang.String getTypeIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#type_identifier DatazoneAssetType#type_identifier}.

---

##### `typeRevision`<sup>Required</sup> <a name="typeRevision" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.typeRevision"></a>

```java
public java.lang.String getTypeRevision();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#type_revision DatazoneAssetType#type_revision}.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#required DatazoneAssetType#required}.

---

### DatazoneAssetTypeTimeouts <a name="DatazoneAssetTypeTimeouts" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_asset_type.DatazoneAssetTypeTimeouts;

DatazoneAssetTypeTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/datazone_asset_type#create DatazoneAssetType#create}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneAssetTypeFormsInputList <a name="DatazoneAssetTypeFormsInputList" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_asset_type.DatazoneAssetTypeFormsInputList;

new DatazoneAssetTypeFormsInputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.get"></a>

```java
public DatazoneAssetTypeFormsInputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a>>

---


### DatazoneAssetTypeFormsInputOutputReference <a name="DatazoneAssetTypeFormsInputOutputReference" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_asset_type.DatazoneAssetTypeFormsInputOutputReference;

new DatazoneAssetTypeFormsInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.resetRequired">resetRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.resetRequired"></a>

```java
public void resetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.mapBlockKeyInput">mapBlockKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeIdentifierInput">typeIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeRevisionInput">typeRevisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.mapBlockKey">mapBlockKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeIdentifier">typeIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeRevision">typeRevision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mapBlockKeyInput`<sup>Optional</sup> <a name="mapBlockKeyInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.mapBlockKeyInput"></a>

```java
public java.lang.String getMapBlockKeyInput();
```

- *Type:* java.lang.String

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.requiredInput"></a>

```java
public java.lang.Object getRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `typeIdentifierInput`<sup>Optional</sup> <a name="typeIdentifierInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeIdentifierInput"></a>

```java
public java.lang.String getTypeIdentifierInput();
```

- *Type:* java.lang.String

---

##### `typeRevisionInput`<sup>Optional</sup> <a name="typeRevisionInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeRevisionInput"></a>

```java
public java.lang.String getTypeRevisionInput();
```

- *Type:* java.lang.String

---

##### `mapBlockKey`<sup>Required</sup> <a name="mapBlockKey" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.mapBlockKey"></a>

```java
public java.lang.String getMapBlockKey();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `typeIdentifier`<sup>Required</sup> <a name="typeIdentifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeIdentifier"></a>

```java
public java.lang.String getTypeIdentifier();
```

- *Type:* java.lang.String

---

##### `typeRevision`<sup>Required</sup> <a name="typeRevision" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeRevision"></a>

```java
public java.lang.String getTypeRevision();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a>

---


### DatazoneAssetTypeTimeoutsOutputReference <a name="DatazoneAssetTypeTimeoutsOutputReference" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_asset_type.DatazoneAssetTypeTimeoutsOutputReference;

new DatazoneAssetTypeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts">DatazoneAssetTypeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts">DatazoneAssetTypeTimeouts</a>

---



