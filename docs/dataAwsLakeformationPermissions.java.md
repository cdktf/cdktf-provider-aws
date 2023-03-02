# `dataAwsLakeformationPermissions` Submodule <a name="`dataAwsLakeformationPermissions` Submodule" id="@cdktf/provider-aws.dataAwsLakeformationPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLakeformationPermissions <a name="DataAwsLakeformationPermissions" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions aws_lakeformation_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lakeformation_permissions.DataAwsLakeformationPermissions;

DataAwsLakeformationPermissions.Builder.create(Construct scope, java.lang.String id)
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
    .principal(java.lang.String)
//  .catalogId(java.lang.String)
//  .catalogResource(java.lang.Boolean)
//  .catalogResource(IResolvable)
//  .database(DataAwsLakeformationPermissionsDatabase)
//  .dataLocation(DataAwsLakeformationPermissionsDataLocation)
//  .id(java.lang.String)
//  .lfTag(DataAwsLakeformationPermissionsLfTag)
//  .lfTagPolicy(DataAwsLakeformationPermissionsLfTagPolicy)
//  .table(DataAwsLakeformationPermissionsTable)
//  .tableWithColumns(DataAwsLakeformationPermissionsTableWithColumns)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#principal DataAwsLakeformationPermissions#principal}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.catalogResource">catalogResource</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_resource DataAwsLakeformationPermissions#catalog_resource}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.database">database</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a></code> | database block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.dataLocation">dataLocation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a></code> | data_location block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#id DataAwsLakeformationPermissions#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.lfTag">lfTag</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a></code> | lf_tag block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.lfTagPolicy">lfTagPolicy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a></code> | lf_tag_policy block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.table">table</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a></code> | table block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a></code> | table_with_columns block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.principal"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#principal DataAwsLakeformationPermissions#principal}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.catalogId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

##### `catalogResource`<sup>Optional</sup> <a name="catalogResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.catalogResource"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_resource DataAwsLakeformationPermissions#catalog_resource}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.database"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a>

database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#database DataAwsLakeformationPermissions#database}

---

##### `dataLocation`<sup>Optional</sup> <a name="dataLocation" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.dataLocation"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a>

data_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#data_location DataAwsLakeformationPermissions#data_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#id DataAwsLakeformationPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lfTag`<sup>Optional</sup> <a name="lfTag" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.lfTag"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a>

lf_tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#lf_tag DataAwsLakeformationPermissions#lf_tag}

---

##### `lfTagPolicy`<sup>Optional</sup> <a name="lfTagPolicy" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.lfTagPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a>

lf_tag_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#lf_tag_policy DataAwsLakeformationPermissions#lf_tag_policy}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.table"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a>

table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#table DataAwsLakeformationPermissions#table}

---

##### `tableWithColumns`<sup>Optional</sup> <a name="tableWithColumns" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.Initializer.parameter.tableWithColumns"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a>

table_with_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#table_with_columns DataAwsLakeformationPermissions#table_with_columns}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDataLocation">putDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTag">putLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTagPolicy">putLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTable">putTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTableWithColumns">putTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetCatalogResource">resetCatalogResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetDataLocation">resetDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetLfTag">resetLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetLfTagPolicy">resetLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetTable">resetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetTableWithColumns">resetTableWithColumns</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDatabase` <a name="putDatabase" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDatabase"></a>

```java
public void putDatabase(DataAwsLakeformationPermissionsDatabase value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a>

---

##### `putDataLocation` <a name="putDataLocation" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDataLocation"></a>

```java
public void putDataLocation(DataAwsLakeformationPermissionsDataLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putDataLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a>

---

##### `putLfTag` <a name="putLfTag" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTag"></a>

```java
public void putLfTag(DataAwsLakeformationPermissionsLfTag value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a>

---

##### `putLfTagPolicy` <a name="putLfTagPolicy" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTagPolicy"></a>

```java
public void putLfTagPolicy(DataAwsLakeformationPermissionsLfTagPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putLfTagPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a>

---

##### `putTable` <a name="putTable" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTable"></a>

```java
public void putTable(DataAwsLakeformationPermissionsTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a>

---

##### `putTableWithColumns` <a name="putTableWithColumns" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTableWithColumns"></a>

```java
public void putTableWithColumns(DataAwsLakeformationPermissionsTableWithColumns value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.putTableWithColumns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a>

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetCatalogId"></a>

```java
public void resetCatalogId()
```

##### `resetCatalogResource` <a name="resetCatalogResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetCatalogResource"></a>

```java
public void resetCatalogResource()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetDataLocation` <a name="resetDataLocation" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetDataLocation"></a>

```java
public void resetDataLocation()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetId"></a>

```java
public void resetId()
```

##### `resetLfTag` <a name="resetLfTag" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetLfTag"></a>

```java
public void resetLfTag()
```

##### `resetLfTagPolicy` <a name="resetLfTagPolicy" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetLfTagPolicy"></a>

```java
public void resetLfTagPolicy()
```

##### `resetTable` <a name="resetTable" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetTable"></a>

```java
public void resetTable()
```

##### `resetTableWithColumns` <a name="resetTableWithColumns" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.resetTableWithColumns"></a>

```java
public void resetTableWithColumns()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lakeformation_permissions.DataAwsLakeformationPermissions;

DataAwsLakeformationPermissions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lakeformation_permissions.DataAwsLakeformationPermissions;

DataAwsLakeformationPermissions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lakeformation_permissions.DataAwsLakeformationPermissions;

DataAwsLakeformationPermissions.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.database">database</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference">DataAwsLakeformationPermissionsDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dataLocation">dataLocation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference">DataAwsLakeformationPermissionsDataLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTag">lfTag</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference">DataAwsLakeformationPermissionsLfTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagPolicy">lfTagPolicy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference">DataAwsLakeformationPermissionsLfTagPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.permissionsWithGrantOption">permissionsWithGrantOption</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.table">table</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference">DataAwsLakeformationPermissionsTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference">DataAwsLakeformationPermissionsTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogResourceInput">catalogResourceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.databaseInput">databaseInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dataLocationInput">dataLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagInput">lfTagInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagPolicyInput">lfTagPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableInput">tableInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableWithColumnsInput">tableWithColumnsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogResource">catalogResource</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.database"></a>

```java
public DataAwsLakeformationPermissionsDatabaseOutputReference getDatabase();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference">DataAwsLakeformationPermissionsDatabaseOutputReference</a>

---

##### `dataLocation`<sup>Required</sup> <a name="dataLocation" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dataLocation"></a>

```java
public DataAwsLakeformationPermissionsDataLocationOutputReference getDataLocation();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference">DataAwsLakeformationPermissionsDataLocationOutputReference</a>

---

##### `lfTag`<sup>Required</sup> <a name="lfTag" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTag"></a>

```java
public DataAwsLakeformationPermissionsLfTagOutputReference getLfTag();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference">DataAwsLakeformationPermissionsLfTagOutputReference</a>

---

##### `lfTagPolicy`<sup>Required</sup> <a name="lfTagPolicy" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagPolicy"></a>

```java
public DataAwsLakeformationPermissionsLfTagPolicyOutputReference getLfTagPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference">DataAwsLakeformationPermissionsLfTagPolicyOutputReference</a>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permissionsWithGrantOption`<sup>Required</sup> <a name="permissionsWithGrantOption" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.permissionsWithGrantOption"></a>

```java
public java.util.List<java.lang.String> getPermissionsWithGrantOption();
```

- *Type:* java.util.List<java.lang.String>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.table"></a>

```java
public DataAwsLakeformationPermissionsTableOutputReference getTable();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference">DataAwsLakeformationPermissionsTableOutputReference</a>

---

##### `tableWithColumns`<sup>Required</sup> <a name="tableWithColumns" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableWithColumns"></a>

```java
public DataAwsLakeformationPermissionsTableWithColumnsOutputReference getTableWithColumns();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference">DataAwsLakeformationPermissionsTableWithColumnsOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `catalogResourceInput`<sup>Optional</sup> <a name="catalogResourceInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogResourceInput"></a>

```java
public java.lang.Object getCatalogResourceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.databaseInput"></a>

```java
public DataAwsLakeformationPermissionsDatabase getDatabaseInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a>

---

##### `dataLocationInput`<sup>Optional</sup> <a name="dataLocationInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.dataLocationInput"></a>

```java
public DataAwsLakeformationPermissionsDataLocation getDataLocationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lfTagInput`<sup>Optional</sup> <a name="lfTagInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagInput"></a>

```java
public DataAwsLakeformationPermissionsLfTag getLfTagInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a>

---

##### `lfTagPolicyInput`<sup>Optional</sup> <a name="lfTagPolicyInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.lfTagPolicyInput"></a>

```java
public DataAwsLakeformationPermissionsLfTagPolicy getLfTagPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a>

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableInput"></a>

```java
public DataAwsLakeformationPermissionsTable getTableInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a>

---

##### `tableWithColumnsInput`<sup>Optional</sup> <a name="tableWithColumnsInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tableWithColumnsInput"></a>

```java
public DataAwsLakeformationPermissionsTableWithColumns getTableWithColumnsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `catalogResource`<sup>Required</sup> <a name="catalogResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.catalogResource"></a>

```java
public java.lang.Object getCatalogResource();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLakeformationPermissionsConfig <a name="DataAwsLakeformationPermissionsConfig" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lakeformation_permissions.DataAwsLakeformationPermissionsConfig;

DataAwsLakeformationPermissionsConfig.builder()
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
    .principal(java.lang.String)
//  .catalogId(java.lang.String)
//  .catalogResource(java.lang.Boolean)
//  .catalogResource(IResolvable)
//  .database(DataAwsLakeformationPermissionsDatabase)
//  .dataLocation(DataAwsLakeformationPermissionsDataLocation)
//  .id(java.lang.String)
//  .lfTag(DataAwsLakeformationPermissionsLfTag)
//  .lfTagPolicy(DataAwsLakeformationPermissionsLfTagPolicy)
//  .table(DataAwsLakeformationPermissionsTable)
//  .tableWithColumns(DataAwsLakeformationPermissionsTableWithColumns)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#principal DataAwsLakeformationPermissions#principal}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.catalogResource">catalogResource</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_resource DataAwsLakeformationPermissions#catalog_resource}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.database">database</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a></code> | database block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.dataLocation">dataLocation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a></code> | data_location block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#id DataAwsLakeformationPermissions#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lfTag">lfTag</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a></code> | lf_tag block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lfTagPolicy">lfTagPolicy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a></code> | lf_tag_policy block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.table">table</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a></code> | table block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a></code> | table_with_columns block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#principal DataAwsLakeformationPermissions#principal}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

##### `catalogResource`<sup>Optional</sup> <a name="catalogResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.catalogResource"></a>

```java
public java.lang.Object getCatalogResource();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_resource DataAwsLakeformationPermissions#catalog_resource}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.database"></a>

```java
public DataAwsLakeformationPermissionsDatabase getDatabase();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a>

database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#database DataAwsLakeformationPermissions#database}

---

##### `dataLocation`<sup>Optional</sup> <a name="dataLocation" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.dataLocation"></a>

```java
public DataAwsLakeformationPermissionsDataLocation getDataLocation();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a>

data_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#data_location DataAwsLakeformationPermissions#data_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#id DataAwsLakeformationPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lfTag`<sup>Optional</sup> <a name="lfTag" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lfTag"></a>

```java
public DataAwsLakeformationPermissionsLfTag getLfTag();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a>

lf_tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#lf_tag DataAwsLakeformationPermissions#lf_tag}

---

##### `lfTagPolicy`<sup>Optional</sup> <a name="lfTagPolicy" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.lfTagPolicy"></a>

```java
public DataAwsLakeformationPermissionsLfTagPolicy getLfTagPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a>

lf_tag_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#lf_tag_policy DataAwsLakeformationPermissions#lf_tag_policy}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.table"></a>

```java
public DataAwsLakeformationPermissionsTable getTable();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a>

table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#table DataAwsLakeformationPermissions#table}

---

##### `tableWithColumns`<sup>Optional</sup> <a name="tableWithColumns" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsConfig.property.tableWithColumns"></a>

```java
public DataAwsLakeformationPermissionsTableWithColumns getTableWithColumns();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a>

table_with_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#table_with_columns DataAwsLakeformationPermissions#table_with_columns}

---

### DataAwsLakeformationPermissionsDatabase <a name="DataAwsLakeformationPermissionsDatabase" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lakeformation_permissions.DataAwsLakeformationPermissionsDatabase;

DataAwsLakeformationPermissionsDatabase.builder()
    .name(java.lang.String)
//  .catalogId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

### DataAwsLakeformationPermissionsDataLocation <a name="DataAwsLakeformationPermissionsDataLocation" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lakeformation_permissions.DataAwsLakeformationPermissionsDataLocation;

DataAwsLakeformationPermissionsDataLocation.builder()
    .arn(java.lang.String)
//  .catalogId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#arn DataAwsLakeformationPermissions#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#arn DataAwsLakeformationPermissions#arn}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

### DataAwsLakeformationPermissionsLfTag <a name="DataAwsLakeformationPermissionsLfTag" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lakeformation_permissions.DataAwsLakeformationPermissionsLfTag;

DataAwsLakeformationPermissionsLfTag.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .catalogId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#key DataAwsLakeformationPermissions#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#values DataAwsLakeformationPermissions#values}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#key DataAwsLakeformationPermissions#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#values DataAwsLakeformationPermissions#values}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

### DataAwsLakeformationPermissionsLfTagPolicy <a name="DataAwsLakeformationPermissionsLfTagPolicy" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lakeformation_permissions.DataAwsLakeformationPermissionsLfTagPolicy;

DataAwsLakeformationPermissionsLfTagPolicy.builder()
    .expression(IResolvable)
    .expression(java.util.List<DataAwsLakeformationPermissionsLfTagPolicyExpression>)
    .resourceType(java.lang.String)
//  .catalogId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.expression">expression</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression">DataAwsLakeformationPermissionsLfTagPolicyExpression</a>></code> | expression block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#resource_type DataAwsLakeformationPermissions#resource_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.expression"></a>

```java
public java.lang.Object getExpression();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression">DataAwsLakeformationPermissionsLfTagPolicyExpression</a>>

expression block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#expression DataAwsLakeformationPermissions#expression}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#resource_type DataAwsLakeformationPermissions#resource_type}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

### DataAwsLakeformationPermissionsLfTagPolicyExpression <a name="DataAwsLakeformationPermissionsLfTagPolicyExpression" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lakeformation_permissions.DataAwsLakeformationPermissionsLfTagPolicyExpression;

DataAwsLakeformationPermissionsLfTagPolicyExpression.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#key DataAwsLakeformationPermissions#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#values DataAwsLakeformationPermissions#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#key DataAwsLakeformationPermissions#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#values DataAwsLakeformationPermissions#values}.

---

### DataAwsLakeformationPermissionsTable <a name="DataAwsLakeformationPermissionsTable" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lakeformation_permissions.DataAwsLakeformationPermissionsTable;

DataAwsLakeformationPermissionsTable.builder()
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
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#database_name DataAwsLakeformationPermissions#database_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.wildcard">wildcard</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#wildcard DataAwsLakeformationPermissions#wildcard}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#database_name DataAwsLakeformationPermissions#database_name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}.

---

##### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable.property.wildcard"></a>

```java
public java.lang.Object getWildcard();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#wildcard DataAwsLakeformationPermissions#wildcard}.

---

### DataAwsLakeformationPermissionsTableWithColumns <a name="DataAwsLakeformationPermissionsTableWithColumns" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lakeformation_permissions.DataAwsLakeformationPermissionsTableWithColumns;

DataAwsLakeformationPermissionsTableWithColumns.builder()
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
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#database_name DataAwsLakeformationPermissions#database_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.columnNames">columnNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#column_names DataAwsLakeformationPermissions#column_names}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.excludedColumnNames">excludedColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#excluded_column_names DataAwsLakeformationPermissions#excluded_column_names}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.wildcard">wildcard</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#wildcard DataAwsLakeformationPermissions#wildcard}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#database_name DataAwsLakeformationPermissions#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#name DataAwsLakeformationPermissions#name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}.

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.columnNames"></a>

```java
public java.util.List<java.lang.String> getColumnNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#column_names DataAwsLakeformationPermissions#column_names}.

---

##### `excludedColumnNames`<sup>Optional</sup> <a name="excludedColumnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.excludedColumnNames"></a>

```java
public java.util.List<java.lang.String> getExcludedColumnNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#excluded_column_names DataAwsLakeformationPermissions#excluded_column_names}.

---

##### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns.property.wildcard"></a>

```java
public java.lang.Object getWildcard();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions#wildcard DataAwsLakeformationPermissions#wildcard}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsLakeformationPermissionsDatabaseOutputReference <a name="DataAwsLakeformationPermissionsDatabaseOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lakeformation_permissions.DataAwsLakeformationPermissionsDatabaseOutputReference;

new DataAwsLakeformationPermissionsDatabaseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabaseOutputReference.property.internalValue"></a>

```java
public DataAwsLakeformationPermissionsDatabase getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDatabase">DataAwsLakeformationPermissionsDatabase</a>

---


### DataAwsLakeformationPermissionsDataLocationOutputReference <a name="DataAwsLakeformationPermissionsDataLocationOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lakeformation_permissions.DataAwsLakeformationPermissionsDataLocationOutputReference;

new DataAwsLakeformationPermissionsDataLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocationOutputReference.property.internalValue"></a>

```java
public DataAwsLakeformationPermissionsDataLocation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsDataLocation">DataAwsLakeformationPermissionsDataLocation</a>

---


### DataAwsLakeformationPermissionsLfTagOutputReference <a name="DataAwsLakeformationPermissionsLfTagOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lakeformation_permissions.DataAwsLakeformationPermissionsLfTagOutputReference;

new DataAwsLakeformationPermissionsLfTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagOutputReference.property.internalValue"></a>

```java
public DataAwsLakeformationPermissionsLfTag getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTag">DataAwsLakeformationPermissionsLfTag</a>

---


### DataAwsLakeformationPermissionsLfTagPolicyExpressionList <a name="DataAwsLakeformationPermissionsLfTagPolicyExpressionList" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lakeformation_permissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList;

new DataAwsLakeformationPermissionsLfTagPolicyExpressionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.get"></a>

```java
public DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression">DataAwsLakeformationPermissionsLfTagPolicyExpression</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression">DataAwsLakeformationPermissionsLfTagPolicyExpression</a>>

---


### DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference <a name="DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lakeformation_permissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference;

new DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression">DataAwsLakeformationPermissionsLfTagPolicyExpression</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression">DataAwsLakeformationPermissionsLfTagPolicyExpression</a> OR com.hashicorp.cdktf.IResolvable

---


### DataAwsLakeformationPermissionsLfTagPolicyOutputReference <a name="DataAwsLakeformationPermissionsLfTagPolicyOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lakeformation_permissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference;

new DataAwsLakeformationPermissionsLfTagPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.putExpression">putExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpression` <a name="putExpression" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.putExpression"></a>

```java
public void putExpression(IResolvable OR java.util.List<DataAwsLakeformationPermissionsLfTagPolicyExpression> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.putExpression.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression">DataAwsLakeformationPermissionsLfTagPolicyExpression</a>>

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.expression">expression</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList">DataAwsLakeformationPermissionsLfTagPolicyExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.expressionInput">expressionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression">DataAwsLakeformationPermissionsLfTagPolicyExpression</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.expression"></a>

```java
public DataAwsLakeformationPermissionsLfTagPolicyExpressionList getExpression();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpressionList">DataAwsLakeformationPermissionsLfTagPolicyExpressionList</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.expressionInput"></a>

```java
public java.lang.Object getExpressionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyExpression">DataAwsLakeformationPermissionsLfTagPolicyExpression</a>>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicyOutputReference.property.internalValue"></a>

```java
public DataAwsLakeformationPermissionsLfTagPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsLfTagPolicy">DataAwsLakeformationPermissionsLfTagPolicy</a>

---


### DataAwsLakeformationPermissionsTableOutputReference <a name="DataAwsLakeformationPermissionsTableOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lakeformation_permissions.DataAwsLakeformationPermissionsTableOutputReference;

new DataAwsLakeformationPermissionsTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetWildcard">resetWildcard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetWildcard` <a name="resetWildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.resetWildcard"></a>

```java
public void resetWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.wildcardInput">wildcardInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.wildcard">wildcard</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `wildcardInput`<sup>Optional</sup> <a name="wildcardInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.wildcardInput"></a>

```java
public java.lang.Object getWildcardInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.wildcard"></a>

```java
public java.lang.Object getWildcard();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableOutputReference.property.internalValue"></a>

```java
public DataAwsLakeformationPermissionsTable getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTable">DataAwsLakeformationPermissionsTable</a>

---


### DataAwsLakeformationPermissionsTableWithColumnsOutputReference <a name="DataAwsLakeformationPermissionsTableWithColumnsOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_lakeformation_permissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference;

new DataAwsLakeformationPermissionsTableWithColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetColumnNames">resetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetExcludedColumnNames">resetExcludedColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetWildcard">resetWildcard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```

##### `resetColumnNames` <a name="resetColumnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetColumnNames"></a>

```java
public void resetColumnNames()
```

##### `resetExcludedColumnNames` <a name="resetExcludedColumnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetExcludedColumnNames"></a>

```java
public void resetExcludedColumnNames()
```

##### `resetWildcard` <a name="resetWildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.resetWildcard"></a>

```java
public void resetWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.columnNamesInput">columnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNamesInput">excludedColumnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.wildcardInput">wildcardInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.columnNames">columnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNames">excludedColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.wildcard">wildcard</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `columnNamesInput`<sup>Optional</sup> <a name="columnNamesInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.columnNamesInput"></a>

```java
public java.util.List<java.lang.String> getColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `excludedColumnNamesInput`<sup>Optional</sup> <a name="excludedColumnNamesInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNamesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `wildcardInput`<sup>Optional</sup> <a name="wildcardInput" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.wildcardInput"></a>

```java
public java.lang.Object getWildcardInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.columnNames"></a>

```java
public java.util.List<java.lang.String> getColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `excludedColumnNames`<sup>Required</sup> <a name="excludedColumnNames" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNames"></a>

```java
public java.util.List<java.lang.String> getExcludedColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.wildcard"></a>

```java
public java.lang.Object getWildcard();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumnsOutputReference.property.internalValue"></a>

```java
public DataAwsLakeformationPermissionsTableWithColumns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationPermissions.DataAwsLakeformationPermissionsTableWithColumns">DataAwsLakeformationPermissionsTableWithColumns</a>

---



