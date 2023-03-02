# `lakeformationResourceLfTags` Submodule <a name="`lakeformationResourceLfTags` Submodule" id="@cdktf/provider-aws.lakeformationResourceLfTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationResourceLfTags <a name="LakeformationResourceLfTags" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags aws_lakeformation_resource_lf_tags}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_resource_lf_tags.LakeformationResourceLfTags;

LakeformationResourceLfTags.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .lfTag(IResolvable)
    .lfTag(java.util.List<LakeformationResourceLfTagsLfTag>)
//  .catalogId(java.lang.String)
//  .database(LakeformationResourceLfTagsDatabase)
//  .id(java.lang.String)
//  .table(LakeformationResourceLfTagsTable)
//  .tableWithColumns(LakeformationResourceLfTagsTableWithColumns)
//  .timeouts(LakeformationResourceLfTagsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.lfTag">lfTag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>></code> | lf_tag block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.database">database</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a></code> | database block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#id LakeformationResourceLfTags#id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.table">table</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a></code> | table block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a></code> | table_with_columns block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lfTag`<sup>Required</sup> <a name="lfTag" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.lfTag"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>>

lf_tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#lf_tag LakeformationResourceLfTags#lf_tag}

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.catalogId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.database"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a>

database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database LakeformationResourceLfTags#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#id LakeformationResourceLfTags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.table"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a>

table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#table LakeformationResourceLfTags#table}

---

##### `tableWithColumns`<sup>Optional</sup> <a name="tableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.tableWithColumns"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a>

table_with_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#table_with_columns LakeformationResourceLfTags#table_with_columns}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#timeouts LakeformationResourceLfTags#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putLfTag">putLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTable">putTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTableWithColumns">putTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTable">resetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTableWithColumns">resetTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDatabase` <a name="putDatabase" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putDatabase"></a>

```java
public void putDatabase(LakeformationResourceLfTagsDatabase value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a>

---

##### `putLfTag` <a name="putLfTag" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putLfTag"></a>

```java
public void putLfTag(IResolvable OR java.util.List<LakeformationResourceLfTagsLfTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putLfTag.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>>

---

##### `putTable` <a name="putTable" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTable"></a>

```java
public void putTable(LakeformationResourceLfTagsTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a>

---

##### `putTableWithColumns` <a name="putTableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTableWithColumns"></a>

```java
public void putTableWithColumns(LakeformationResourceLfTagsTableWithColumns value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTableWithColumns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTimeouts"></a>

```java
public void putTimeouts(LakeformationResourceLfTagsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a>

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetCatalogId"></a>

```java
public void resetCatalogId()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetId"></a>

```java
public void resetId()
```

##### `resetTable` <a name="resetTable" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTable"></a>

```java
public void resetTable()
```

##### `resetTableWithColumns` <a name="resetTableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTableWithColumns"></a>

```java
public void resetTableWithColumns()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_resource_lf_tags.LakeformationResourceLfTags;

LakeformationResourceLfTags.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_resource_lf_tags.LakeformationResourceLfTags;

LakeformationResourceLfTags.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_resource_lf_tags.LakeformationResourceLfTags;

LakeformationResourceLfTags.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.database">database</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference">LakeformationResourceLfTagsDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lfTag">lfTag</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList">LakeformationResourceLfTagsLfTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.table">table</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference">LakeformationResourceLfTagsTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference">LakeformationResourceLfTagsTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference">LakeformationResourceLfTagsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.databaseInput">databaseInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lfTagInput">lfTagInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableInput">tableInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableWithColumnsInput">tableWithColumnsInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.database"></a>

```java
public LakeformationResourceLfTagsDatabaseOutputReference getDatabase();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference">LakeformationResourceLfTagsDatabaseOutputReference</a>

---

##### `lfTag`<sup>Required</sup> <a name="lfTag" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lfTag"></a>

```java
public LakeformationResourceLfTagsLfTagList getLfTag();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList">LakeformationResourceLfTagsLfTagList</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.table"></a>

```java
public LakeformationResourceLfTagsTableOutputReference getTable();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference">LakeformationResourceLfTagsTableOutputReference</a>

---

##### `tableWithColumns`<sup>Required</sup> <a name="tableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableWithColumns"></a>

```java
public LakeformationResourceLfTagsTableWithColumnsOutputReference getTableWithColumns();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference">LakeformationResourceLfTagsTableWithColumnsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.timeouts"></a>

```java
public LakeformationResourceLfTagsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference">LakeformationResourceLfTagsTimeoutsOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.databaseInput"></a>

```java
public LakeformationResourceLfTagsDatabase getDatabaseInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lfTagInput`<sup>Optional</sup> <a name="lfTagInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lfTagInput"></a>

```java
public java.lang.Object getLfTagInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>>

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableInput"></a>

```java
public LakeformationResourceLfTagsTable getTableInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a>

---

##### `tableWithColumnsInput`<sup>Optional</sup> <a name="tableWithColumnsInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableWithColumnsInput"></a>

```java
public LakeformationResourceLfTagsTableWithColumns getTableWithColumnsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationResourceLfTagsConfig <a name="LakeformationResourceLfTagsConfig" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_resource_lf_tags.LakeformationResourceLfTagsConfig;

LakeformationResourceLfTagsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .lfTag(IResolvable)
    .lfTag(java.util.List<LakeformationResourceLfTagsLfTag>)
//  .catalogId(java.lang.String)
//  .database(LakeformationResourceLfTagsDatabase)
//  .id(java.lang.String)
//  .table(LakeformationResourceLfTagsTable)
//  .tableWithColumns(LakeformationResourceLfTagsTableWithColumns)
//  .timeouts(LakeformationResourceLfTagsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.lfTag">lfTag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>></code> | lf_tag block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.database">database</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a></code> | database block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#id LakeformationResourceLfTags#id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.table">table</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a></code> | table block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a></code> | table_with_columns block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lfTag`<sup>Required</sup> <a name="lfTag" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.lfTag"></a>

```java
public java.lang.Object getLfTag();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>>

lf_tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#lf_tag LakeformationResourceLfTags#lf_tag}

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.database"></a>

```java
public LakeformationResourceLfTagsDatabase getDatabase();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a>

database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database LakeformationResourceLfTags#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#id LakeformationResourceLfTags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.table"></a>

```java
public LakeformationResourceLfTagsTable getTable();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a>

table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#table LakeformationResourceLfTags#table}

---

##### `tableWithColumns`<sup>Optional</sup> <a name="tableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.tableWithColumns"></a>

```java
public LakeformationResourceLfTagsTableWithColumns getTableWithColumns();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a>

table_with_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#table_with_columns LakeformationResourceLfTags#table_with_columns}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.timeouts"></a>

```java
public LakeformationResourceLfTagsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#timeouts LakeformationResourceLfTags#timeouts}

---

### LakeformationResourceLfTagsDatabase <a name="LakeformationResourceLfTagsDatabase" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_resource_lf_tags.LakeformationResourceLfTagsDatabase;

LakeformationResourceLfTagsDatabase.builder()
    .name(java.lang.String)
//  .catalogId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

### LakeformationResourceLfTagsLfTag <a name="LakeformationResourceLfTagsLfTag" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_resource_lf_tags.LakeformationResourceLfTagsLfTag;

LakeformationResourceLfTagsLfTag.builder()
    .key(java.lang.String)
    .value(java.lang.String)
//  .catalogId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#key LakeformationResourceLfTags#key}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#value LakeformationResourceLfTags#value}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#key LakeformationResourceLfTags#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#value LakeformationResourceLfTags#value}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

### LakeformationResourceLfTagsTable <a name="LakeformationResourceLfTagsTable" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_resource_lf_tags.LakeformationResourceLfTagsTable;

LakeformationResourceLfTagsTable.builder()
    .databaseName(java.lang.String)
//  .catalogId(java.lang.String)
//  .name(java.lang.String)
//  .wildcard(java.lang.Boolean)
//  .wildcard(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database_name LakeformationResourceLfTags#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.wildcard">wildcard</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#wildcard LakeformationResourceLfTags#wildcard}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database_name LakeformationResourceLfTags#database_name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}.

---

##### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.wildcard"></a>

```java
public java.lang.Object getWildcard();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#wildcard LakeformationResourceLfTags#wildcard}.

---

### LakeformationResourceLfTagsTableWithColumns <a name="LakeformationResourceLfTagsTableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_resource_lf_tags.LakeformationResourceLfTagsTableWithColumns;

LakeformationResourceLfTagsTableWithColumns.builder()
    .databaseName(java.lang.String)
    .name(java.lang.String)
//  .catalogId(java.lang.String)
//  .columnNames(java.util.List<java.lang.String>)
//  .excludedColumnNames(java.util.List<java.lang.String>)
//  .wildcard(java.lang.Boolean)
//  .wildcard(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database_name LakeformationResourceLfTags#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.columnNames">columnNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#column_names LakeformationResourceLfTags#column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.excludedColumnNames">excludedColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#excluded_column_names LakeformationResourceLfTags#excluded_column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.wildcard">wildcard</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#wildcard LakeformationResourceLfTags#wildcard}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database_name LakeformationResourceLfTags#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.columnNames"></a>

```java
public java.util.List<java.lang.String> getColumnNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#column_names LakeformationResourceLfTags#column_names}.

---

##### `excludedColumnNames`<sup>Optional</sup> <a name="excludedColumnNames" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.excludedColumnNames"></a>

```java
public java.util.List<java.lang.String> getExcludedColumnNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#excluded_column_names LakeformationResourceLfTags#excluded_column_names}.

---

##### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.wildcard"></a>

```java
public java.lang.Object getWildcard();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#wildcard LakeformationResourceLfTags#wildcard}.

---

### LakeformationResourceLfTagsTimeouts <a name="LakeformationResourceLfTagsTimeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_resource_lf_tags.LakeformationResourceLfTagsTimeouts;

LakeformationResourceLfTagsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#create LakeformationResourceLfTags#create}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#delete LakeformationResourceLfTags#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#create LakeformationResourceLfTags#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#delete LakeformationResourceLfTags#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationResourceLfTagsDatabaseOutputReference <a name="LakeformationResourceLfTagsDatabaseOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_resource_lf_tags.LakeformationResourceLfTagsDatabaseOutputReference;

new LakeformationResourceLfTagsDatabaseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.internalValue"></a>

```java
public LakeformationResourceLfTagsDatabase getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a>

---


### LakeformationResourceLfTagsLfTagList <a name="LakeformationResourceLfTagsLfTagList" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_resource_lf_tags.LakeformationResourceLfTagsLfTagList;

new LakeformationResourceLfTagsLfTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.get"></a>

```java
public LakeformationResourceLfTagsLfTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>>

---


### LakeformationResourceLfTagsLfTagOutputReference <a name="LakeformationResourceLfTagsLfTagOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_resource_lf_tags.LakeformationResourceLfTagsLfTagOutputReference;

new LakeformationResourceLfTagsLfTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a> OR com.hashicorp.cdktf.IResolvable

---


### LakeformationResourceLfTagsTableOutputReference <a name="LakeformationResourceLfTagsTableOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_resource_lf_tags.LakeformationResourceLfTagsTableOutputReference;

new LakeformationResourceLfTagsTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetWildcard">resetWildcard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetWildcard` <a name="resetWildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetWildcard"></a>

```java
public void resetWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.wildcardInput">wildcardInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.wildcard">wildcard</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `wildcardInput`<sup>Optional</sup> <a name="wildcardInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.wildcardInput"></a>

```java
public java.lang.Object getWildcardInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.wildcard"></a>

```java
public java.lang.Object getWildcard();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.internalValue"></a>

```java
public LakeformationResourceLfTagsTable getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a>

---


### LakeformationResourceLfTagsTableWithColumnsOutputReference <a name="LakeformationResourceLfTagsTableWithColumnsOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_resource_lf_tags.LakeformationResourceLfTagsTableWithColumnsOutputReference;

new LakeformationResourceLfTagsTableWithColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetColumnNames">resetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetExcludedColumnNames">resetExcludedColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetWildcard">resetWildcard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```

##### `resetColumnNames` <a name="resetColumnNames" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetColumnNames"></a>

```java
public void resetColumnNames()
```

##### `resetExcludedColumnNames` <a name="resetExcludedColumnNames" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetExcludedColumnNames"></a>

```java
public void resetExcludedColumnNames()
```

##### `resetWildcard` <a name="resetWildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetWildcard"></a>

```java
public void resetWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.columnNamesInput">columnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.excludedColumnNamesInput">excludedColumnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.wildcardInput">wildcardInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.columnNames">columnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.excludedColumnNames">excludedColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.wildcard">wildcard</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `columnNamesInput`<sup>Optional</sup> <a name="columnNamesInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.columnNamesInput"></a>

```java
public java.util.List<java.lang.String> getColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `excludedColumnNamesInput`<sup>Optional</sup> <a name="excludedColumnNamesInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.excludedColumnNamesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `wildcardInput`<sup>Optional</sup> <a name="wildcardInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.wildcardInput"></a>

```java
public java.lang.Object getWildcardInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.columnNames"></a>

```java
public java.util.List<java.lang.String> getColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `excludedColumnNames`<sup>Required</sup> <a name="excludedColumnNames" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.excludedColumnNames"></a>

```java
public java.util.List<java.lang.String> getExcludedColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.wildcard"></a>

```java
public java.lang.Object getWildcard();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.internalValue"></a>

```java
public LakeformationResourceLfTagsTableWithColumns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a>

---


### LakeformationResourceLfTagsTimeoutsOutputReference <a name="LakeformationResourceLfTagsTimeoutsOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_resource_lf_tags.LakeformationResourceLfTagsTimeoutsOutputReference;

new LakeformationResourceLfTagsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



