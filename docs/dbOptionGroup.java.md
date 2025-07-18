# `dbOptionGroup` Submodule <a name="`dbOptionGroup` Submodule" id="@cdktf/provider-aws.dbOptionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbOptionGroup <a name="DbOptionGroup" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group aws_db_option_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_option_group.DbOptionGroup;

DbOptionGroup.Builder.create(Construct scope, java.lang.String id)
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
    .engineName(java.lang.String)
    .majorEngineVersion(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .option(IResolvable)
//  .option(java.util.List<DbOptionGroupOption>)
//  .optionGroupDescription(java.lang.String)
//  .region(java.lang.String)
//  .skipDestroy(java.lang.Boolean)
//  .skipDestroy(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DbOptionGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.engineName">engineName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#engine_name DbOptionGroup#engine_name}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.majorEngineVersion">majorEngineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#major_engine_version DbOptionGroup#major_engine_version}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#id DbOptionGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#name DbOptionGroup#name}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#name_prefix DbOptionGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.option">option</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>></code> | option block. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.optionGroupDescription">optionGroupDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#option_group_description DbOptionGroup#option_group_description}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.skipDestroy">skipDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#skip_destroy DbOptionGroup#skip_destroy}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#tags DbOptionGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#tags_all DbOptionGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.engineName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#engine_name DbOptionGroup#engine_name}.

---

##### `majorEngineVersion`<sup>Required</sup> <a name="majorEngineVersion" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.majorEngineVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#major_engine_version DbOptionGroup#major_engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#id DbOptionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#name DbOptionGroup#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#name_prefix DbOptionGroup#name_prefix}.

---

##### `option`<sup>Optional</sup> <a name="option" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.option"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>>

option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#option DbOptionGroup#option}

---

##### `optionGroupDescription`<sup>Optional</sup> <a name="optionGroupDescription" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.optionGroupDescription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#option_group_description DbOptionGroup#option_group_description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#region DbOptionGroup#region}

---

##### `skipDestroy`<sup>Optional</sup> <a name="skipDestroy" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.skipDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#skip_destroy DbOptionGroup#skip_destroy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#tags DbOptionGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#tags_all DbOptionGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#timeouts DbOptionGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putOption">putOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOption">resetOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOptionGroupDescription">resetOptionGroupDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetSkipDestroy">resetSkipDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOption` <a name="putOption" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putOption"></a>

```java
public void putOption(IResolvable OR java.util.List<DbOptionGroupOption> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putOption.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putTimeouts"></a>

```java
public void putTimeouts(DbOptionGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetOption` <a name="resetOption" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOption"></a>

```java
public void resetOption()
```

##### `resetOptionGroupDescription` <a name="resetOptionGroupDescription" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOptionGroupDescription"></a>

```java
public void resetOptionGroupDescription()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSkipDestroy` <a name="resetSkipDestroy" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetSkipDestroy"></a>

```java
public void resetSkipDestroy()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DbOptionGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_option_group.DbOptionGroup;

DbOptionGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_option_group.DbOptionGroup;

DbOptionGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_option_group.DbOptionGroup;

DbOptionGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_option_group.DbOptionGroup;

DbOptionGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DbOptionGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DbOptionGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DbOptionGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DbOptionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DbOptionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.option">option</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList">DbOptionGroupOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference">DbOptionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.engineNameInput">engineNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.majorEngineVersionInput">majorEngineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionGroupDescriptionInput">optionGroupDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionInput">optionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.skipDestroyInput">skipDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.engineName">engineName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.majorEngineVersion">majorEngineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionGroupDescription">optionGroupDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.skipDestroy">skipDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.option"></a>

```java
public DbOptionGroupOptionList getOption();
```

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList">DbOptionGroupOptionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.timeouts"></a>

```java
public DbOptionGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference">DbOptionGroupTimeoutsOutputReference</a>

---

##### `engineNameInput`<sup>Optional</sup> <a name="engineNameInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.engineNameInput"></a>

```java
public java.lang.String getEngineNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `majorEngineVersionInput`<sup>Optional</sup> <a name="majorEngineVersionInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.majorEngineVersionInput"></a>

```java
public java.lang.String getMajorEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `optionGroupDescriptionInput`<sup>Optional</sup> <a name="optionGroupDescriptionInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionGroupDescriptionInput"></a>

```java
public java.lang.String getOptionGroupDescriptionInput();
```

- *Type:* java.lang.String

---

##### `optionInput`<sup>Optional</sup> <a name="optionInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionInput"></a>

```java
public java.lang.Object getOptionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `skipDestroyInput`<sup>Optional</sup> <a name="skipDestroyInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.skipDestroyInput"></a>

```java
public java.lang.Object getSkipDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a>

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.engineName"></a>

```java
public java.lang.String getEngineName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `majorEngineVersion`<sup>Required</sup> <a name="majorEngineVersion" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.majorEngineVersion"></a>

```java
public java.lang.String getMajorEngineVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `optionGroupDescription`<sup>Required</sup> <a name="optionGroupDescription" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionGroupDescription"></a>

```java
public java.lang.String getOptionGroupDescription();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `skipDestroy`<sup>Required</sup> <a name="skipDestroy" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.skipDestroy"></a>

```java
public java.lang.Object getSkipDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DbOptionGroupConfig <a name="DbOptionGroupConfig" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_option_group.DbOptionGroupConfig;

DbOptionGroupConfig.builder()
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
    .engineName(java.lang.String)
    .majorEngineVersion(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .option(IResolvable)
//  .option(java.util.List<DbOptionGroupOption>)
//  .optionGroupDescription(java.lang.String)
//  .region(java.lang.String)
//  .skipDestroy(java.lang.Boolean)
//  .skipDestroy(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DbOptionGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.engineName">engineName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#engine_name DbOptionGroup#engine_name}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.majorEngineVersion">majorEngineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#major_engine_version DbOptionGroup#major_engine_version}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#id DbOptionGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#name DbOptionGroup#name}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#name_prefix DbOptionGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.option">option</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>></code> | option block. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.optionGroupDescription">optionGroupDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#option_group_description DbOptionGroup#option_group_description}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.skipDestroy">skipDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#skip_destroy DbOptionGroup#skip_destroy}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#tags DbOptionGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#tags_all DbOptionGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.engineName"></a>

```java
public java.lang.String getEngineName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#engine_name DbOptionGroup#engine_name}.

---

##### `majorEngineVersion`<sup>Required</sup> <a name="majorEngineVersion" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.majorEngineVersion"></a>

```java
public java.lang.String getMajorEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#major_engine_version DbOptionGroup#major_engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#id DbOptionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#name DbOptionGroup#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#name_prefix DbOptionGroup#name_prefix}.

---

##### `option`<sup>Optional</sup> <a name="option" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.option"></a>

```java
public java.lang.Object getOption();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>>

option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#option DbOptionGroup#option}

---

##### `optionGroupDescription`<sup>Optional</sup> <a name="optionGroupDescription" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.optionGroupDescription"></a>

```java
public java.lang.String getOptionGroupDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#option_group_description DbOptionGroup#option_group_description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#region DbOptionGroup#region}

---

##### `skipDestroy`<sup>Optional</sup> <a name="skipDestroy" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.skipDestroy"></a>

```java
public java.lang.Object getSkipDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#skip_destroy DbOptionGroup#skip_destroy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#tags DbOptionGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#tags_all DbOptionGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.timeouts"></a>

```java
public DbOptionGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#timeouts DbOptionGroup#timeouts}

---

### DbOptionGroupOption <a name="DbOptionGroupOption" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_option_group.DbOptionGroupOption;

DbOptionGroupOption.builder()
    .optionName(java.lang.String)
//  .dbSecurityGroupMemberships(java.util.List<java.lang.String>)
//  .optionSettings(IResolvable)
//  .optionSettings(java.util.List<DbOptionGroupOptionOptionSettings>)
//  .port(java.lang.Number)
//  .version(java.lang.String)
//  .vpcSecurityGroupMemberships(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.optionName">optionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#option_name DbOptionGroup#option_name}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.dbSecurityGroupMemberships">dbSecurityGroupMemberships</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#db_security_group_memberships DbOptionGroup#db_security_group_memberships}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.optionSettings">optionSettings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>></code> | option_settings block. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#port DbOptionGroup#port}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#version DbOptionGroup#version}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.vpcSecurityGroupMemberships">vpcSecurityGroupMemberships</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#vpc_security_group_memberships DbOptionGroup#vpc_security_group_memberships}. |

---

##### `optionName`<sup>Required</sup> <a name="optionName" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.optionName"></a>

```java
public java.lang.String getOptionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#option_name DbOptionGroup#option_name}.

---

##### `dbSecurityGroupMemberships`<sup>Optional</sup> <a name="dbSecurityGroupMemberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.dbSecurityGroupMemberships"></a>

```java
public java.util.List<java.lang.String> getDbSecurityGroupMemberships();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#db_security_group_memberships DbOptionGroup#db_security_group_memberships}.

---

##### `optionSettings`<sup>Optional</sup> <a name="optionSettings" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.optionSettings"></a>

```java
public java.lang.Object getOptionSettings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>>

option_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#option_settings DbOptionGroup#option_settings}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#port DbOptionGroup#port}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#version DbOptionGroup#version}.

---

##### `vpcSecurityGroupMemberships`<sup>Optional</sup> <a name="vpcSecurityGroupMemberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.vpcSecurityGroupMemberships"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupMemberships();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#vpc_security_group_memberships DbOptionGroup#vpc_security_group_memberships}.

---

### DbOptionGroupOptionOptionSettings <a name="DbOptionGroupOptionOptionSettings" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_option_group.DbOptionGroupOptionOptionSettings;

DbOptionGroupOptionOptionSettings.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#name DbOptionGroup#name}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#value DbOptionGroup#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#name DbOptionGroup#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#value DbOptionGroup#value}.

---

### DbOptionGroupTimeouts <a name="DbOptionGroupTimeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_option_group.DbOptionGroupTimeouts;

DbOptionGroupTimeouts.builder()
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#delete DbOptionGroup#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/db_option_group#delete DbOptionGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbOptionGroupOptionList <a name="DbOptionGroupOptionList" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_option_group.DbOptionGroupOptionList;

new DbOptionGroupOptionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.get"></a>

```java
public DbOptionGroupOptionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>>

---


### DbOptionGroupOptionOptionSettingsList <a name="DbOptionGroupOptionOptionSettingsList" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_option_group.DbOptionGroupOptionOptionSettingsList;

new DbOptionGroupOptionOptionSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.get"></a>

```java
public DbOptionGroupOptionOptionSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>>

---


### DbOptionGroupOptionOptionSettingsOutputReference <a name="DbOptionGroupOptionOptionSettingsOutputReference" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_option_group.DbOptionGroupOptionOptionSettingsOutputReference;

new DbOptionGroupOptionOptionSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>

---


### DbOptionGroupOptionOutputReference <a name="DbOptionGroupOptionOutputReference" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_option_group.DbOptionGroupOptionOutputReference;

new DbOptionGroupOptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.putOptionSettings">putOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetDbSecurityGroupMemberships">resetDbSecurityGroupMemberships</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetOptionSettings">resetOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetVpcSecurityGroupMemberships">resetVpcSecurityGroupMemberships</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOptionSettings` <a name="putOptionSettings" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.putOptionSettings"></a>

```java
public void putOptionSettings(IResolvable OR java.util.List<DbOptionGroupOptionOptionSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.putOptionSettings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>>

---

##### `resetDbSecurityGroupMemberships` <a name="resetDbSecurityGroupMemberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetDbSecurityGroupMemberships"></a>

```java
public void resetDbSecurityGroupMemberships()
```

##### `resetOptionSettings` <a name="resetOptionSettings" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetOptionSettings"></a>

```java
public void resetOptionSettings()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetVersion"></a>

```java
public void resetVersion()
```

##### `resetVpcSecurityGroupMemberships` <a name="resetVpcSecurityGroupMemberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetVpcSecurityGroupMemberships"></a>

```java
public void resetVpcSecurityGroupMemberships()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionSettings">optionSettings</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList">DbOptionGroupOptionOptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.dbSecurityGroupMembershipsInput">dbSecurityGroupMembershipsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionNameInput">optionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionSettingsInput">optionSettingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.vpcSecurityGroupMembershipsInput">vpcSecurityGroupMembershipsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.dbSecurityGroupMemberships">dbSecurityGroupMemberships</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionName">optionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.vpcSecurityGroupMemberships">vpcSecurityGroupMemberships</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `optionSettings`<sup>Required</sup> <a name="optionSettings" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionSettings"></a>

```java
public DbOptionGroupOptionOptionSettingsList getOptionSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList">DbOptionGroupOptionOptionSettingsList</a>

---

##### `dbSecurityGroupMembershipsInput`<sup>Optional</sup> <a name="dbSecurityGroupMembershipsInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.dbSecurityGroupMembershipsInput"></a>

```java
public java.util.List<java.lang.String> getDbSecurityGroupMembershipsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `optionNameInput`<sup>Optional</sup> <a name="optionNameInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionNameInput"></a>

```java
public java.lang.String getOptionNameInput();
```

- *Type:* java.lang.String

---

##### `optionSettingsInput`<sup>Optional</sup> <a name="optionSettingsInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionSettingsInput"></a>

```java
public java.lang.Object getOptionSettingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupMembershipsInput`<sup>Optional</sup> <a name="vpcSecurityGroupMembershipsInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.vpcSecurityGroupMembershipsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupMembershipsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbSecurityGroupMemberships`<sup>Required</sup> <a name="dbSecurityGroupMemberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.dbSecurityGroupMemberships"></a>

```java
public java.util.List<java.lang.String> getDbSecurityGroupMemberships();
```

- *Type:* java.util.List<java.lang.String>

---

##### `optionName`<sup>Required</sup> <a name="optionName" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionName"></a>

```java
public java.lang.String getOptionName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupMemberships`<sup>Required</sup> <a name="vpcSecurityGroupMemberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.vpcSecurityGroupMemberships"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupMemberships();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>

---


### DbOptionGroupTimeoutsOutputReference <a name="DbOptionGroupTimeoutsOutputReference" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_option_group.DbOptionGroupTimeoutsOutputReference;

new DbOptionGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a>

---



