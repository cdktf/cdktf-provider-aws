# `macie2FindingsFilter` Submodule <a name="`macie2FindingsFilter` Submodule" id="@cdktf/provider-aws.macie2FindingsFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Macie2FindingsFilter <a name="Macie2FindingsFilter" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter aws_macie2_findings_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_findings_filter.Macie2FindingsFilter;

Macie2FindingsFilter.Builder.create(Construct scope, java.lang.String id)
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
    .action(java.lang.String)
    .findingCriteria(Macie2FindingsFilterFindingCriteria)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .position(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Macie2FindingsFilterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#action Macie2FindingsFilter#action}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.findingCriteria">findingCriteria</a></code> | <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a></code> | finding_criteria block. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#description Macie2FindingsFilter#description}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#id Macie2FindingsFilter#id}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#name Macie2FindingsFilter#name}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#name_prefix Macie2FindingsFilter#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#position Macie2FindingsFilter#position}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#tags Macie2FindingsFilter#tags}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#tags_all Macie2FindingsFilter#tags_all}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeouts">Macie2FindingsFilterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.action"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#action Macie2FindingsFilter#action}.

---

##### `findingCriteria`<sup>Required</sup> <a name="findingCriteria" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.findingCriteria"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a>

finding_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#finding_criteria Macie2FindingsFilter#finding_criteria}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#description Macie2FindingsFilter#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#id Macie2FindingsFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#name Macie2FindingsFilter#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#name_prefix Macie2FindingsFilter#name_prefix}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.position"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#position Macie2FindingsFilter#position}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#tags Macie2FindingsFilter#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#tags_all Macie2FindingsFilter#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeouts">Macie2FindingsFilterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#timeouts Macie2FindingsFilter#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.putFindingCriteria">putFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFindingCriteria` <a name="putFindingCriteria" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.putFindingCriteria"></a>

```java
public void putFindingCriteria(Macie2FindingsFilterFindingCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.putFindingCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.putTimeouts"></a>

```java
public void putTimeouts(Macie2FindingsFilterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeouts">Macie2FindingsFilterTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetPosition` <a name="resetPosition" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetPosition"></a>

```java
public void resetPosition()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Macie2FindingsFilter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_findings_filter.Macie2FindingsFilter;

Macie2FindingsFilter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_findings_filter.Macie2FindingsFilter;

Macie2FindingsFilter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_findings_filter.Macie2FindingsFilter;

Macie2FindingsFilter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_findings_filter.Macie2FindingsFilter;

Macie2FindingsFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Macie2FindingsFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Macie2FindingsFilter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Macie2FindingsFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Macie2FindingsFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Macie2FindingsFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.findingCriteria">findingCriteria</a></code> | <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference">Macie2FindingsFilterFindingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference">Macie2FindingsFilterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.findingCriteriaInput">findingCriteriaInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeouts">Macie2FindingsFilterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `findingCriteria`<sup>Required</sup> <a name="findingCriteria" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.findingCriteria"></a>

```java
public Macie2FindingsFilterFindingCriteriaOutputReference getFindingCriteria();
```

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference">Macie2FindingsFilterFindingCriteriaOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.timeouts"></a>

```java
public Macie2FindingsFilterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference">Macie2FindingsFilterTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `findingCriteriaInput`<sup>Optional</sup> <a name="findingCriteriaInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.findingCriteriaInput"></a>

```java
public Macie2FindingsFilterFindingCriteria getFindingCriteriaInput();
```

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeouts">Macie2FindingsFilterTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Macie2FindingsFilterConfig <a name="Macie2FindingsFilterConfig" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_findings_filter.Macie2FindingsFilterConfig;

Macie2FindingsFilterConfig.builder()
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
    .action(java.lang.String)
    .findingCriteria(Macie2FindingsFilterFindingCriteria)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .position(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Macie2FindingsFilterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#action Macie2FindingsFilter#action}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.findingCriteria">findingCriteria</a></code> | <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a></code> | finding_criteria block. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#description Macie2FindingsFilter#description}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#id Macie2FindingsFilter#id}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#name Macie2FindingsFilter#name}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#name_prefix Macie2FindingsFilter#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#position Macie2FindingsFilter#position}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#tags Macie2FindingsFilter#tags}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#tags_all Macie2FindingsFilter#tags_all}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeouts">Macie2FindingsFilterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#action Macie2FindingsFilter#action}.

---

##### `findingCriteria`<sup>Required</sup> <a name="findingCriteria" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.findingCriteria"></a>

```java
public Macie2FindingsFilterFindingCriteria getFindingCriteria();
```

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a>

finding_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#finding_criteria Macie2FindingsFilter#finding_criteria}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#description Macie2FindingsFilter#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#id Macie2FindingsFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#name Macie2FindingsFilter#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#name_prefix Macie2FindingsFilter#name_prefix}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#position Macie2FindingsFilter#position}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#tags Macie2FindingsFilter#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#tags_all Macie2FindingsFilter#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.timeouts"></a>

```java
public Macie2FindingsFilterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeouts">Macie2FindingsFilterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#timeouts Macie2FindingsFilter#timeouts}

---

### Macie2FindingsFilterFindingCriteria <a name="Macie2FindingsFilterFindingCriteria" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_findings_filter.Macie2FindingsFilterFindingCriteria;

Macie2FindingsFilterFindingCriteria.builder()
//  .criterion(IResolvable)
//  .criterion(java.util.List<Macie2FindingsFilterFindingCriteriaCriterion>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria.property.criterion">criterion</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion">Macie2FindingsFilterFindingCriteriaCriterion</a>></code> | criterion block. |

---

##### `criterion`<sup>Optional</sup> <a name="criterion" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria.property.criterion"></a>

```java
public java.lang.Object getCriterion();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion">Macie2FindingsFilterFindingCriteriaCriterion</a>>

criterion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#criterion Macie2FindingsFilter#criterion}

---

### Macie2FindingsFilterFindingCriteriaCriterion <a name="Macie2FindingsFilterFindingCriteriaCriterion" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_findings_filter.Macie2FindingsFilterFindingCriteriaCriterion;

Macie2FindingsFilterFindingCriteriaCriterion.builder()
    .field(java.lang.String)
//  .eq(java.util.List<java.lang.String>)
//  .eqExactMatch(java.util.List<java.lang.String>)
//  .gt(java.lang.String)
//  .gte(java.lang.String)
//  .lt(java.lang.String)
//  .lte(java.lang.String)
//  .neq(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.field">field</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#field Macie2FindingsFilter#field}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.eq">eq</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#eq Macie2FindingsFilter#eq}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.eqExactMatch">eqExactMatch</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#eq_exact_match Macie2FindingsFilter#eq_exact_match}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.gt">gt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#gt Macie2FindingsFilter#gt}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.gte">gte</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#gte Macie2FindingsFilter#gte}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.lt">lt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#lt Macie2FindingsFilter#lt}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.lte">lte</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#lte Macie2FindingsFilter#lte}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.neq">neq</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#neq Macie2FindingsFilter#neq}. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#field Macie2FindingsFilter#field}.

---

##### `eq`<sup>Optional</sup> <a name="eq" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.eq"></a>

```java
public java.util.List<java.lang.String> getEq();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#eq Macie2FindingsFilter#eq}.

---

##### `eqExactMatch`<sup>Optional</sup> <a name="eqExactMatch" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.eqExactMatch"></a>

```java
public java.util.List<java.lang.String> getEqExactMatch();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#eq_exact_match Macie2FindingsFilter#eq_exact_match}.

---

##### `gt`<sup>Optional</sup> <a name="gt" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.gt"></a>

```java
public java.lang.String getGt();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#gt Macie2FindingsFilter#gt}.

---

##### `gte`<sup>Optional</sup> <a name="gte" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.gte"></a>

```java
public java.lang.String getGte();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#gte Macie2FindingsFilter#gte}.

---

##### `lt`<sup>Optional</sup> <a name="lt" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.lt"></a>

```java
public java.lang.String getLt();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#lt Macie2FindingsFilter#lt}.

---

##### `lte`<sup>Optional</sup> <a name="lte" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.lte"></a>

```java
public java.lang.String getLte();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#lte Macie2FindingsFilter#lte}.

---

##### `neq`<sup>Optional</sup> <a name="neq" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.neq"></a>

```java
public java.util.List<java.lang.String> getNeq();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#neq Macie2FindingsFilter#neq}.

---

### Macie2FindingsFilterTimeouts <a name="Macie2FindingsFilterTimeouts" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_findings_filter.Macie2FindingsFilterTimeouts;

Macie2FindingsFilterTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#create Macie2FindingsFilter#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/macie2_findings_filter#create Macie2FindingsFilter#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### Macie2FindingsFilterFindingCriteriaCriterionList <a name="Macie2FindingsFilterFindingCriteriaCriterionList" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_findings_filter.Macie2FindingsFilterFindingCriteriaCriterionList;

new Macie2FindingsFilterFindingCriteriaCriterionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.get"></a>

```java
public Macie2FindingsFilterFindingCriteriaCriterionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion">Macie2FindingsFilterFindingCriteriaCriterion</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion">Macie2FindingsFilterFindingCriteriaCriterion</a>>

---


### Macie2FindingsFilterFindingCriteriaCriterionOutputReference <a name="Macie2FindingsFilterFindingCriteriaCriterionOutputReference" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_findings_filter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference;

new Macie2FindingsFilterFindingCriteriaCriterionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetEq">resetEq</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetEqExactMatch">resetEqExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetGt">resetGt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetGte">resetGte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetLt">resetLt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetLte">resetLte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetNeq">resetNeq</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEq` <a name="resetEq" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetEq"></a>

```java
public void resetEq()
```

##### `resetEqExactMatch` <a name="resetEqExactMatch" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetEqExactMatch"></a>

```java
public void resetEqExactMatch()
```

##### `resetGt` <a name="resetGt" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetGt"></a>

```java
public void resetGt()
```

##### `resetGte` <a name="resetGte" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetGte"></a>

```java
public void resetGte()
```

##### `resetLt` <a name="resetLt" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetLt"></a>

```java
public void resetLt()
```

##### `resetLte` <a name="resetLte" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetLte"></a>

```java
public void resetLte()
```

##### `resetNeq` <a name="resetNeq" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetNeq"></a>

```java
public void resetNeq()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eqExactMatchInput">eqExactMatchInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eqInput">eqInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gteInput">gteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gtInput">gtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.lteInput">lteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.ltInput">ltInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.neqInput">neqInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eq">eq</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eqExactMatch">eqExactMatch</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gt">gt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gte">gte</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.lt">lt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.lte">lte</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.neq">neq</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion">Macie2FindingsFilterFindingCriteriaCriterion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eqExactMatchInput`<sup>Optional</sup> <a name="eqExactMatchInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eqExactMatchInput"></a>

```java
public java.util.List<java.lang.String> getEqExactMatchInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `eqInput`<sup>Optional</sup> <a name="eqInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eqInput"></a>

```java
public java.util.List<java.lang.String> getEqInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `gteInput`<sup>Optional</sup> <a name="gteInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gteInput"></a>

```java
public java.lang.String getGteInput();
```

- *Type:* java.lang.String

---

##### `gtInput`<sup>Optional</sup> <a name="gtInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gtInput"></a>

```java
public java.lang.String getGtInput();
```

- *Type:* java.lang.String

---

##### `lteInput`<sup>Optional</sup> <a name="lteInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.lteInput"></a>

```java
public java.lang.String getLteInput();
```

- *Type:* java.lang.String

---

##### `ltInput`<sup>Optional</sup> <a name="ltInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.ltInput"></a>

```java
public java.lang.String getLtInput();
```

- *Type:* java.lang.String

---

##### `neqInput`<sup>Optional</sup> <a name="neqInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.neqInput"></a>

```java
public java.util.List<java.lang.String> getNeqInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `eq`<sup>Required</sup> <a name="eq" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eq"></a>

```java
public java.util.List<java.lang.String> getEq();
```

- *Type:* java.util.List<java.lang.String>

---

##### `eqExactMatch`<sup>Required</sup> <a name="eqExactMatch" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eqExactMatch"></a>

```java
public java.util.List<java.lang.String> getEqExactMatch();
```

- *Type:* java.util.List<java.lang.String>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `gt`<sup>Required</sup> <a name="gt" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gt"></a>

```java
public java.lang.String getGt();
```

- *Type:* java.lang.String

---

##### `gte`<sup>Required</sup> <a name="gte" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gte"></a>

```java
public java.lang.String getGte();
```

- *Type:* java.lang.String

---

##### `lt`<sup>Required</sup> <a name="lt" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.lt"></a>

```java
public java.lang.String getLt();
```

- *Type:* java.lang.String

---

##### `lte`<sup>Required</sup> <a name="lte" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.lte"></a>

```java
public java.lang.String getLte();
```

- *Type:* java.lang.String

---

##### `neq`<sup>Required</sup> <a name="neq" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.neq"></a>

```java
public java.util.List<java.lang.String> getNeq();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion">Macie2FindingsFilterFindingCriteriaCriterion</a>

---


### Macie2FindingsFilterFindingCriteriaOutputReference <a name="Macie2FindingsFilterFindingCriteriaOutputReference" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_findings_filter.Macie2FindingsFilterFindingCriteriaOutputReference;

new Macie2FindingsFilterFindingCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.putCriterion">putCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.resetCriterion">resetCriterion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCriterion` <a name="putCriterion" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.putCriterion"></a>

```java
public void putCriterion(IResolvable OR java.util.List<Macie2FindingsFilterFindingCriteriaCriterion> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.putCriterion.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion">Macie2FindingsFilterFindingCriteriaCriterion</a>>

---

##### `resetCriterion` <a name="resetCriterion" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.resetCriterion"></a>

```java
public void resetCriterion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.criterion">criterion</a></code> | <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList">Macie2FindingsFilterFindingCriteriaCriterionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.criterionInput">criterionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion">Macie2FindingsFilterFindingCriteriaCriterion</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `criterion`<sup>Required</sup> <a name="criterion" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.criterion"></a>

```java
public Macie2FindingsFilterFindingCriteriaCriterionList getCriterion();
```

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList">Macie2FindingsFilterFindingCriteriaCriterionList</a>

---

##### `criterionInput`<sup>Optional</sup> <a name="criterionInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.criterionInput"></a>

```java
public java.lang.Object getCriterionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion">Macie2FindingsFilterFindingCriteriaCriterion</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.internalValue"></a>

```java
public Macie2FindingsFilterFindingCriteria getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a>

---


### Macie2FindingsFilterTimeoutsOutputReference <a name="Macie2FindingsFilterTimeoutsOutputReference" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_findings_filter.Macie2FindingsFilterTimeoutsOutputReference;

new Macie2FindingsFilterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeouts">Macie2FindingsFilterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterTimeouts">Macie2FindingsFilterTimeouts</a>

---



