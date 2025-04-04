# `datazoneGlossaryTerm` Submodule <a name="`datazoneGlossaryTerm` Submodule" id="@cdktf/provider-aws.datazoneGlossaryTerm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneGlossaryTerm <a name="DatazoneGlossaryTerm" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term aws_datazone_glossary_term}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_glossary_term.DatazoneGlossaryTerm;

DatazoneGlossaryTerm.Builder.create(Construct scope, java.lang.String id)
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
    .glossaryIdentifier(java.lang.String)
    .name(java.lang.String)
//  .domainIdentifier(java.lang.String)
//  .longDescription(java.lang.String)
//  .shortDescription(java.lang.String)
//  .status(java.lang.String)
//  .termRelations(IResolvable)
//  .termRelations(java.util.List<DatazoneGlossaryTermTermRelations>)
//  .timeouts(DatazoneGlossaryTermTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.glossaryIdentifier">glossaryIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#glossary_identifier DatazoneGlossaryTerm#glossary_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#name DatazoneGlossaryTerm#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#domain_identifier DatazoneGlossaryTerm#domain_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.longDescription">longDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#long_description DatazoneGlossaryTerm#long_description}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.shortDescription">shortDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#short_description DatazoneGlossaryTerm#short_description}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#status DatazoneGlossaryTerm#status}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.termRelations">termRelations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>></code> | term_relations block. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `glossaryIdentifier`<sup>Required</sup> <a name="glossaryIdentifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.glossaryIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#glossary_identifier DatazoneGlossaryTerm#glossary_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#name DatazoneGlossaryTerm#name}.

---

##### `domainIdentifier`<sup>Optional</sup> <a name="domainIdentifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.domainIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#domain_identifier DatazoneGlossaryTerm#domain_identifier}.

---

##### `longDescription`<sup>Optional</sup> <a name="longDescription" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.longDescription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#long_description DatazoneGlossaryTerm#long_description}.

---

##### `shortDescription`<sup>Optional</sup> <a name="shortDescription" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.shortDescription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#short_description DatazoneGlossaryTerm#short_description}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#status DatazoneGlossaryTerm#status}.

---

##### `termRelations`<sup>Optional</sup> <a name="termRelations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.termRelations"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>>

term_relations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#term_relations DatazoneGlossaryTerm#term_relations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#timeouts DatazoneGlossaryTerm#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTermRelations">putTermRelations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetDomainIdentifier">resetDomainIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetLongDescription">resetLongDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetShortDescription">resetShortDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetTermRelations">resetTermRelations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTermRelations` <a name="putTermRelations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTermRelations"></a>

```java
public void putTermRelations(IResolvable OR java.util.List<DatazoneGlossaryTermTermRelations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTermRelations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTimeouts"></a>

```java
public void putTimeouts(DatazoneGlossaryTermTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a>

---

##### `resetDomainIdentifier` <a name="resetDomainIdentifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetDomainIdentifier"></a>

```java
public void resetDomainIdentifier()
```

##### `resetLongDescription` <a name="resetLongDescription" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetLongDescription"></a>

```java
public void resetLongDescription()
```

##### `resetShortDescription` <a name="resetShortDescription" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetShortDescription"></a>

```java
public void resetShortDescription()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTermRelations` <a name="resetTermRelations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetTermRelations"></a>

```java
public void resetTermRelations()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatazoneGlossaryTerm resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_glossary_term.DatazoneGlossaryTerm;

DatazoneGlossaryTerm.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_glossary_term.DatazoneGlossaryTerm;

DatazoneGlossaryTerm.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_glossary_term.DatazoneGlossaryTerm;

DatazoneGlossaryTerm.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_glossary_term.DatazoneGlossaryTerm;

DatazoneGlossaryTerm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatazoneGlossaryTerm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatazoneGlossaryTerm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatazoneGlossaryTerm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatazoneGlossaryTerm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatazoneGlossaryTerm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.termRelations">termRelations</a></code> | <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList">DatazoneGlossaryTermTermRelationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference">DatazoneGlossaryTermTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.domainIdentifierInput">domainIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.glossaryIdentifierInput">glossaryIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.longDescriptionInput">longDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.shortDescriptionInput">shortDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.termRelationsInput">termRelationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.glossaryIdentifier">glossaryIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.longDescription">longDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.shortDescription">shortDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `termRelations`<sup>Required</sup> <a name="termRelations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.termRelations"></a>

```java
public DatazoneGlossaryTermTermRelationsList getTermRelations();
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList">DatazoneGlossaryTermTermRelationsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.timeouts"></a>

```java
public DatazoneGlossaryTermTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference">DatazoneGlossaryTermTimeoutsOutputReference</a>

---

##### `domainIdentifierInput`<sup>Optional</sup> <a name="domainIdentifierInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.domainIdentifierInput"></a>

```java
public java.lang.String getDomainIdentifierInput();
```

- *Type:* java.lang.String

---

##### `glossaryIdentifierInput`<sup>Optional</sup> <a name="glossaryIdentifierInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.glossaryIdentifierInput"></a>

```java
public java.lang.String getGlossaryIdentifierInput();
```

- *Type:* java.lang.String

---

##### `longDescriptionInput`<sup>Optional</sup> <a name="longDescriptionInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.longDescriptionInput"></a>

```java
public java.lang.String getLongDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `shortDescriptionInput`<sup>Optional</sup> <a name="shortDescriptionInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.shortDescriptionInput"></a>

```java
public java.lang.String getShortDescriptionInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `termRelationsInput`<sup>Optional</sup> <a name="termRelationsInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.termRelationsInput"></a>

```java
public java.lang.Object getTermRelationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a>

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.domainIdentifier"></a>

```java
public java.lang.String getDomainIdentifier();
```

- *Type:* java.lang.String

---

##### `glossaryIdentifier`<sup>Required</sup> <a name="glossaryIdentifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.glossaryIdentifier"></a>

```java
public java.lang.String getGlossaryIdentifier();
```

- *Type:* java.lang.String

---

##### `longDescription`<sup>Required</sup> <a name="longDescription" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.longDescription"></a>

```java
public java.lang.String getLongDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `shortDescription`<sup>Required</sup> <a name="shortDescription" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.shortDescription"></a>

```java
public java.lang.String getShortDescription();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneGlossaryTermConfig <a name="DatazoneGlossaryTermConfig" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_glossary_term.DatazoneGlossaryTermConfig;

DatazoneGlossaryTermConfig.builder()
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
    .glossaryIdentifier(java.lang.String)
    .name(java.lang.String)
//  .domainIdentifier(java.lang.String)
//  .longDescription(java.lang.String)
//  .shortDescription(java.lang.String)
//  .status(java.lang.String)
//  .termRelations(IResolvable)
//  .termRelations(java.util.List<DatazoneGlossaryTermTermRelations>)
//  .timeouts(DatazoneGlossaryTermTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.glossaryIdentifier">glossaryIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#glossary_identifier DatazoneGlossaryTerm#glossary_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#name DatazoneGlossaryTerm#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#domain_identifier DatazoneGlossaryTerm#domain_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.longDescription">longDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#long_description DatazoneGlossaryTerm#long_description}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.shortDescription">shortDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#short_description DatazoneGlossaryTerm#short_description}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#status DatazoneGlossaryTerm#status}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.termRelations">termRelations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>></code> | term_relations block. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `glossaryIdentifier`<sup>Required</sup> <a name="glossaryIdentifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.glossaryIdentifier"></a>

```java
public java.lang.String getGlossaryIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#glossary_identifier DatazoneGlossaryTerm#glossary_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#name DatazoneGlossaryTerm#name}.

---

##### `domainIdentifier`<sup>Optional</sup> <a name="domainIdentifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.domainIdentifier"></a>

```java
public java.lang.String getDomainIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#domain_identifier DatazoneGlossaryTerm#domain_identifier}.

---

##### `longDescription`<sup>Optional</sup> <a name="longDescription" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.longDescription"></a>

```java
public java.lang.String getLongDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#long_description DatazoneGlossaryTerm#long_description}.

---

##### `shortDescription`<sup>Optional</sup> <a name="shortDescription" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.shortDescription"></a>

```java
public java.lang.String getShortDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#short_description DatazoneGlossaryTerm#short_description}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#status DatazoneGlossaryTerm#status}.

---

##### `termRelations`<sup>Optional</sup> <a name="termRelations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.termRelations"></a>

```java
public java.lang.Object getTermRelations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>>

term_relations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#term_relations DatazoneGlossaryTerm#term_relations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.timeouts"></a>

```java
public DatazoneGlossaryTermTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#timeouts DatazoneGlossaryTerm#timeouts}

---

### DatazoneGlossaryTermTermRelations <a name="DatazoneGlossaryTermTermRelations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_glossary_term.DatazoneGlossaryTermTermRelations;

DatazoneGlossaryTermTermRelations.builder()
//  .classifies(java.util.List<java.lang.String>)
//  .isA(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.property.classifies">classifies</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#classifies DatazoneGlossaryTerm#classifies}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.property.isA">isA</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#is_a DatazoneGlossaryTerm#is_a}. |

---

##### `classifies`<sup>Optional</sup> <a name="classifies" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.property.classifies"></a>

```java
public java.util.List<java.lang.String> getClassifies();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#classifies DatazoneGlossaryTerm#classifies}.

---

##### `isA`<sup>Optional</sup> <a name="isA" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.property.isA"></a>

```java
public java.util.List<java.lang.String> getIsA();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#is_a DatazoneGlossaryTerm#is_a}.

---

### DatazoneGlossaryTermTimeouts <a name="DatazoneGlossaryTermTimeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_glossary_term.DatazoneGlossaryTermTimeouts;

DatazoneGlossaryTermTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/datazone_glossary_term#create DatazoneGlossaryTerm#create}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneGlossaryTermTermRelationsList <a name="DatazoneGlossaryTermTermRelationsList" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_glossary_term.DatazoneGlossaryTermTermRelationsList;

new DatazoneGlossaryTermTermRelationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.get"></a>

```java
public DatazoneGlossaryTermTermRelationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>>

---


### DatazoneGlossaryTermTermRelationsOutputReference <a name="DatazoneGlossaryTermTermRelationsOutputReference" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_glossary_term.DatazoneGlossaryTermTermRelationsOutputReference;

new DatazoneGlossaryTermTermRelationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resetClassifies">resetClassifies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resetIsA">resetIsA</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassifies` <a name="resetClassifies" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resetClassifies"></a>

```java
public void resetClassifies()
```

##### `resetIsA` <a name="resetIsA" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resetIsA"></a>

```java
public void resetIsA()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.classifiesInput">classifiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.isAInput">isAInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.classifies">classifies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.isA">isA</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `classifiesInput`<sup>Optional</sup> <a name="classifiesInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.classifiesInput"></a>

```java
public java.util.List<java.lang.String> getClassifiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isAInput`<sup>Optional</sup> <a name="isAInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.isAInput"></a>

```java
public java.util.List<java.lang.String> getIsAInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `classifies`<sup>Required</sup> <a name="classifies" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.classifies"></a>

```java
public java.util.List<java.lang.String> getClassifies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isA`<sup>Required</sup> <a name="isA" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.isA"></a>

```java
public java.util.List<java.lang.String> getIsA();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>

---


### DatazoneGlossaryTermTimeoutsOutputReference <a name="DatazoneGlossaryTermTimeoutsOutputReference" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datazone_glossary_term.DatazoneGlossaryTermTimeoutsOutputReference;

new DatazoneGlossaryTermTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a>

---



