# `lakeformationPermissions` Submodule <a name="`lakeformationPermissions` Submodule" id="@cdktf/provider-aws.lakeformationPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationPermissions <a name="LakeformationPermissions" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions aws_lakeformation_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_permissions.LakeformationPermissions;

LakeformationPermissions.Builder.create(Construct scope, java.lang.String id)
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
    .permissions(java.util.List<java.lang.String>)
    .principal(java.lang.String)
//  .catalogId(java.lang.String)
//  .catalogResource(java.lang.Boolean)
//  .catalogResource(IResolvable)
//  .database(LakeformationPermissionsDatabase)
//  .dataLocation(LakeformationPermissionsDataLocation)
//  .id(java.lang.String)
//  .lfTag(LakeformationPermissionsLfTag)
//  .lfTagPolicy(LakeformationPermissionsLfTagPolicy)
//  .permissionsWithGrantOption(java.util.List<java.lang.String>)
//  .table(LakeformationPermissionsTable)
//  .tableWithColumns(LakeformationPermissionsTableWithColumns)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#permissions LakeformationPermissions#permissions}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#principal LakeformationPermissions#principal}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.catalogResource">catalogResource</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_resource LakeformationPermissions#catalog_resource}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.database">database</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a></code> | database block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.dataLocation">dataLocation</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a></code> | data_location block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#id LakeformationPermissions#id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.lfTag">lfTag</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a></code> | lf_tag block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.lfTagPolicy">lfTagPolicy</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a></code> | lf_tag_policy block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.permissionsWithGrantOption">permissionsWithGrantOption</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#permissions_with_grant_option LakeformationPermissions#permissions_with_grant_option}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.table">table</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a></code> | table block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a></code> | table_with_columns block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.permissions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#permissions LakeformationPermissions#permissions}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.principal"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#principal LakeformationPermissions#principal}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.catalogId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

##### `catalogResource`<sup>Optional</sup> <a name="catalogResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.catalogResource"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_resource LakeformationPermissions#catalog_resource}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.database"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a>

database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#database LakeformationPermissions#database}

---

##### `dataLocation`<sup>Optional</sup> <a name="dataLocation" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.dataLocation"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a>

data_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#data_location LakeformationPermissions#data_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#id LakeformationPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lfTag`<sup>Optional</sup> <a name="lfTag" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.lfTag"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a>

lf_tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#lf_tag LakeformationPermissions#lf_tag}

---

##### `lfTagPolicy`<sup>Optional</sup> <a name="lfTagPolicy" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.lfTagPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a>

lf_tag_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#lf_tag_policy LakeformationPermissions#lf_tag_policy}

---

##### `permissionsWithGrantOption`<sup>Optional</sup> <a name="permissionsWithGrantOption" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.permissionsWithGrantOption"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#permissions_with_grant_option LakeformationPermissions#permissions_with_grant_option}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.table"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a>

table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#table LakeformationPermissions#table}

---

##### `tableWithColumns`<sup>Optional</sup> <a name="tableWithColumns" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.Initializer.parameter.tableWithColumns"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a>

table_with_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#table_with_columns LakeformationPermissions#table_with_columns}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putDataLocation">putDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putLfTag">putLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putLfTagPolicy">putLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putTable">putTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putTableWithColumns">putTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetCatalogResource">resetCatalogResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetDataLocation">resetDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetLfTag">resetLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetLfTagPolicy">resetLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetPermissionsWithGrantOption">resetPermissionsWithGrantOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetTable">resetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetTableWithColumns">resetTableWithColumns</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDatabase` <a name="putDatabase" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putDatabase"></a>

```java
public void putDatabase(LakeformationPermissionsDatabase value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a>

---

##### `putDataLocation` <a name="putDataLocation" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putDataLocation"></a>

```java
public void putDataLocation(LakeformationPermissionsDataLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putDataLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a>

---

##### `putLfTag` <a name="putLfTag" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putLfTag"></a>

```java
public void putLfTag(LakeformationPermissionsLfTag value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putLfTag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a>

---

##### `putLfTagPolicy` <a name="putLfTagPolicy" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putLfTagPolicy"></a>

```java
public void putLfTagPolicy(LakeformationPermissionsLfTagPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putLfTagPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a>

---

##### `putTable` <a name="putTable" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putTable"></a>

```java
public void putTable(LakeformationPermissionsTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a>

---

##### `putTableWithColumns` <a name="putTableWithColumns" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putTableWithColumns"></a>

```java
public void putTableWithColumns(LakeformationPermissionsTableWithColumns value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.putTableWithColumns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a>

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetCatalogId"></a>

```java
public void resetCatalogId()
```

##### `resetCatalogResource` <a name="resetCatalogResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetCatalogResource"></a>

```java
public void resetCatalogResource()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetDataLocation` <a name="resetDataLocation" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetDataLocation"></a>

```java
public void resetDataLocation()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetId"></a>

```java
public void resetId()
```

##### `resetLfTag` <a name="resetLfTag" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetLfTag"></a>

```java
public void resetLfTag()
```

##### `resetLfTagPolicy` <a name="resetLfTagPolicy" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetLfTagPolicy"></a>

```java
public void resetLfTagPolicy()
```

##### `resetPermissionsWithGrantOption` <a name="resetPermissionsWithGrantOption" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetPermissionsWithGrantOption"></a>

```java
public void resetPermissionsWithGrantOption()
```

##### `resetTable` <a name="resetTable" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetTable"></a>

```java
public void resetTable()
```

##### `resetTableWithColumns` <a name="resetTableWithColumns" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.resetTableWithColumns"></a>

```java
public void resetTableWithColumns()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_permissions.LakeformationPermissions;

LakeformationPermissions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_permissions.LakeformationPermissions;

LakeformationPermissions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_permissions.LakeformationPermissions;

LakeformationPermissions.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.database">database</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference">LakeformationPermissionsDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.dataLocation">dataLocation</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference">LakeformationPermissionsDataLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTag">lfTag</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference">LakeformationPermissionsLfTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTagPolicy">lfTagPolicy</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference">LakeformationPermissionsLfTagPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.table">table</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference">LakeformationPermissionsTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference">LakeformationPermissionsTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogResourceInput">catalogResourceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.databaseInput">databaseInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.dataLocationInput">dataLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTagInput">lfTagInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTagPolicyInput">lfTagPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissionsInput">permissionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissionsWithGrantOptionInput">permissionsWithGrantOptionInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tableInput">tableInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tableWithColumnsInput">tableWithColumnsInput</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogResource">catalogResource</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissionsWithGrantOption">permissionsWithGrantOption</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.database"></a>

```java
public LakeformationPermissionsDatabaseOutputReference getDatabase();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference">LakeformationPermissionsDatabaseOutputReference</a>

---

##### `dataLocation`<sup>Required</sup> <a name="dataLocation" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.dataLocation"></a>

```java
public LakeformationPermissionsDataLocationOutputReference getDataLocation();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference">LakeformationPermissionsDataLocationOutputReference</a>

---

##### `lfTag`<sup>Required</sup> <a name="lfTag" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTag"></a>

```java
public LakeformationPermissionsLfTagOutputReference getLfTag();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference">LakeformationPermissionsLfTagOutputReference</a>

---

##### `lfTagPolicy`<sup>Required</sup> <a name="lfTagPolicy" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTagPolicy"></a>

```java
public LakeformationPermissionsLfTagPolicyOutputReference getLfTagPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference">LakeformationPermissionsLfTagPolicyOutputReference</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.table"></a>

```java
public LakeformationPermissionsTableOutputReference getTable();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference">LakeformationPermissionsTableOutputReference</a>

---

##### `tableWithColumns`<sup>Required</sup> <a name="tableWithColumns" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tableWithColumns"></a>

```java
public LakeformationPermissionsTableWithColumnsOutputReference getTableWithColumns();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference">LakeformationPermissionsTableWithColumnsOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `catalogResourceInput`<sup>Optional</sup> <a name="catalogResourceInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogResourceInput"></a>

```java
public java.lang.Object getCatalogResourceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.databaseInput"></a>

```java
public LakeformationPermissionsDatabase getDatabaseInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a>

---

##### `dataLocationInput`<sup>Optional</sup> <a name="dataLocationInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.dataLocationInput"></a>

```java
public LakeformationPermissionsDataLocation getDataLocationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lfTagInput`<sup>Optional</sup> <a name="lfTagInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTagInput"></a>

```java
public LakeformationPermissionsLfTag getLfTagInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a>

---

##### `lfTagPolicyInput`<sup>Optional</sup> <a name="lfTagPolicyInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.lfTagPolicyInput"></a>

```java
public LakeformationPermissionsLfTagPolicy getLfTagPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a>

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissionsInput"></a>

```java
public java.util.List<java.lang.String> getPermissionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permissionsWithGrantOptionInput`<sup>Optional</sup> <a name="permissionsWithGrantOptionInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissionsWithGrantOptionInput"></a>

```java
public java.util.List<java.lang.String> getPermissionsWithGrantOptionInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tableInput"></a>

```java
public LakeformationPermissionsTable getTableInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a>

---

##### `tableWithColumnsInput`<sup>Optional</sup> <a name="tableWithColumnsInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tableWithColumnsInput"></a>

```java
public LakeformationPermissionsTableWithColumns getTableWithColumnsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `catalogResource`<sup>Required</sup> <a name="catalogResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.catalogResource"></a>

```java
public java.lang.Object getCatalogResource();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permissionsWithGrantOption`<sup>Required</sup> <a name="permissionsWithGrantOption" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.permissionsWithGrantOption"></a>

```java
public java.util.List<java.lang.String> getPermissionsWithGrantOption();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationPermissionsConfig <a name="LakeformationPermissionsConfig" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_permissions.LakeformationPermissionsConfig;

LakeformationPermissionsConfig.builder()
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
    .permissions(java.util.List<java.lang.String>)
    .principal(java.lang.String)
//  .catalogId(java.lang.String)
//  .catalogResource(java.lang.Boolean)
//  .catalogResource(IResolvable)
//  .database(LakeformationPermissionsDatabase)
//  .dataLocation(LakeformationPermissionsDataLocation)
//  .id(java.lang.String)
//  .lfTag(LakeformationPermissionsLfTag)
//  .lfTagPolicy(LakeformationPermissionsLfTagPolicy)
//  .permissionsWithGrantOption(java.util.List<java.lang.String>)
//  .table(LakeformationPermissionsTable)
//  .tableWithColumns(LakeformationPermissionsTableWithColumns)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#permissions LakeformationPermissions#permissions}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#principal LakeformationPermissions#principal}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.catalogResource">catalogResource</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_resource LakeformationPermissions#catalog_resource}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.database">database</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a></code> | database block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.dataLocation">dataLocation</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a></code> | data_location block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#id LakeformationPermissions#id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.lfTag">lfTag</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a></code> | lf_tag block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.lfTagPolicy">lfTagPolicy</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a></code> | lf_tag_policy block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.permissionsWithGrantOption">permissionsWithGrantOption</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#permissions_with_grant_option LakeformationPermissions#permissions_with_grant_option}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.table">table</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a></code> | table block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a></code> | table_with_columns block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#permissions LakeformationPermissions#permissions}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#principal LakeformationPermissions#principal}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

##### `catalogResource`<sup>Optional</sup> <a name="catalogResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.catalogResource"></a>

```java
public java.lang.Object getCatalogResource();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_resource LakeformationPermissions#catalog_resource}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.database"></a>

```java
public LakeformationPermissionsDatabase getDatabase();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a>

database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#database LakeformationPermissions#database}

---

##### `dataLocation`<sup>Optional</sup> <a name="dataLocation" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.dataLocation"></a>

```java
public LakeformationPermissionsDataLocation getDataLocation();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a>

data_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#data_location LakeformationPermissions#data_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#id LakeformationPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lfTag`<sup>Optional</sup> <a name="lfTag" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.lfTag"></a>

```java
public LakeformationPermissionsLfTag getLfTag();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a>

lf_tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#lf_tag LakeformationPermissions#lf_tag}

---

##### `lfTagPolicy`<sup>Optional</sup> <a name="lfTagPolicy" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.lfTagPolicy"></a>

```java
public LakeformationPermissionsLfTagPolicy getLfTagPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a>

lf_tag_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#lf_tag_policy LakeformationPermissions#lf_tag_policy}

---

##### `permissionsWithGrantOption`<sup>Optional</sup> <a name="permissionsWithGrantOption" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.permissionsWithGrantOption"></a>

```java
public java.util.List<java.lang.String> getPermissionsWithGrantOption();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#permissions_with_grant_option LakeformationPermissions#permissions_with_grant_option}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.table"></a>

```java
public LakeformationPermissionsTable getTable();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a>

table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#table LakeformationPermissions#table}

---

##### `tableWithColumns`<sup>Optional</sup> <a name="tableWithColumns" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsConfig.property.tableWithColumns"></a>

```java
public LakeformationPermissionsTableWithColumns getTableWithColumns();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a>

table_with_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#table_with_columns LakeformationPermissions#table_with_columns}

---

### LakeformationPermissionsDatabase <a name="LakeformationPermissionsDatabase" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_permissions.LakeformationPermissionsDatabase;

LakeformationPermissionsDatabase.builder()
    .name(java.lang.String)
//  .catalogId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#name LakeformationPermissions#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#name LakeformationPermissions#name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

### LakeformationPermissionsDataLocation <a name="LakeformationPermissionsDataLocation" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_permissions.LakeformationPermissionsDataLocation;

LakeformationPermissionsDataLocation.builder()
    .arn(java.lang.String)
//  .catalogId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#arn LakeformationPermissions#arn}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#arn LakeformationPermissions#arn}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

### LakeformationPermissionsLfTag <a name="LakeformationPermissionsLfTag" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_permissions.LakeformationPermissionsLfTag;

LakeformationPermissionsLfTag.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .catalogId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#key LakeformationPermissions#key}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#values LakeformationPermissions#values}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#key LakeformationPermissions#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#values LakeformationPermissions#values}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

### LakeformationPermissionsLfTagPolicy <a name="LakeformationPermissionsLfTagPolicy" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_permissions.LakeformationPermissionsLfTagPolicy;

LakeformationPermissionsLfTagPolicy.builder()
    .expression(IResolvable)
    .expression(java.util.List<LakeformationPermissionsLfTagPolicyExpression>)
    .resourceType(java.lang.String)
//  .catalogId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy.property.expression">expression</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression">LakeformationPermissionsLfTagPolicyExpression</a>></code> | expression block. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#resource_type LakeformationPermissions#resource_type}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy.property.expression"></a>

```java
public java.lang.Object getExpression();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression">LakeformationPermissionsLfTagPolicyExpression</a>>

expression block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#expression LakeformationPermissions#expression}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#resource_type LakeformationPermissions#resource_type}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

### LakeformationPermissionsLfTagPolicyExpression <a name="LakeformationPermissionsLfTagPolicyExpression" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_permissions.LakeformationPermissionsLfTagPolicyExpression;

LakeformationPermissionsLfTagPolicyExpression.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#key LakeformationPermissions#key}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#values LakeformationPermissions#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#key LakeformationPermissions#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#values LakeformationPermissions#values}.

---

### LakeformationPermissionsTable <a name="LakeformationPermissionsTable" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_permissions.LakeformationPermissionsTable;

LakeformationPermissionsTable.builder()
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
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#database_name LakeformationPermissions#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#name LakeformationPermissions#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.wildcard">wildcard</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#wildcard LakeformationPermissions#wildcard}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#database_name LakeformationPermissions#database_name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#name LakeformationPermissions#name}.

---

##### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable.property.wildcard"></a>

```java
public java.lang.Object getWildcard();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#wildcard LakeformationPermissions#wildcard}.

---

### LakeformationPermissionsTableWithColumns <a name="LakeformationPermissionsTableWithColumns" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_permissions.LakeformationPermissionsTableWithColumns;

LakeformationPermissionsTableWithColumns.builder()
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
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#database_name LakeformationPermissions#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#name LakeformationPermissions#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.columnNames">columnNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#column_names LakeformationPermissions#column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.excludedColumnNames">excludedColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#excluded_column_names LakeformationPermissions#excluded_column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.wildcard">wildcard</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#wildcard LakeformationPermissions#wildcard}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#database_name LakeformationPermissions#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#name LakeformationPermissions#name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#catalog_id LakeformationPermissions#catalog_id}.

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.columnNames"></a>

```java
public java.util.List<java.lang.String> getColumnNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#column_names LakeformationPermissions#column_names}.

---

##### `excludedColumnNames`<sup>Optional</sup> <a name="excludedColumnNames" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.excludedColumnNames"></a>

```java
public java.util.List<java.lang.String> getExcludedColumnNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#excluded_column_names LakeformationPermissions#excluded_column_names}.

---

##### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns.property.wildcard"></a>

```java
public java.lang.Object getWildcard();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions#wildcard LakeformationPermissions#wildcard}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationPermissionsDatabaseOutputReference <a name="LakeformationPermissionsDatabaseOutputReference" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_permissions.LakeformationPermissionsDatabaseOutputReference;

new LakeformationPermissionsDatabaseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabaseOutputReference.property.internalValue"></a>

```java
public LakeformationPermissionsDatabase getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDatabase">LakeformationPermissionsDatabase</a>

---


### LakeformationPermissionsDataLocationOutputReference <a name="LakeformationPermissionsDataLocationOutputReference" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_permissions.LakeformationPermissionsDataLocationOutputReference;

new LakeformationPermissionsDataLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocationOutputReference.property.internalValue"></a>

```java
public LakeformationPermissionsDataLocation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsDataLocation">LakeformationPermissionsDataLocation</a>

---


### LakeformationPermissionsLfTagOutputReference <a name="LakeformationPermissionsLfTagOutputReference" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_permissions.LakeformationPermissionsLfTagOutputReference;

new LakeformationPermissionsLfTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagOutputReference.property.internalValue"></a>

```java
public LakeformationPermissionsLfTag getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTag">LakeformationPermissionsLfTag</a>

---


### LakeformationPermissionsLfTagPolicyExpressionList <a name="LakeformationPermissionsLfTagPolicyExpressionList" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_permissions.LakeformationPermissionsLfTagPolicyExpressionList;

new LakeformationPermissionsLfTagPolicyExpressionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.get"></a>

```java
public LakeformationPermissionsLfTagPolicyExpressionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression">LakeformationPermissionsLfTagPolicyExpression</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression">LakeformationPermissionsLfTagPolicyExpression</a>>

---


### LakeformationPermissionsLfTagPolicyExpressionOutputReference <a name="LakeformationPermissionsLfTagPolicyExpressionOutputReference" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_permissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference;

new LakeformationPermissionsLfTagPolicyExpressionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression">LakeformationPermissionsLfTagPolicyExpression</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression">LakeformationPermissionsLfTagPolicyExpression</a> OR com.hashicorp.cdktf.IResolvable

---


### LakeformationPermissionsLfTagPolicyOutputReference <a name="LakeformationPermissionsLfTagPolicyOutputReference" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_permissions.LakeformationPermissionsLfTagPolicyOutputReference;

new LakeformationPermissionsLfTagPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.putExpression">putExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpression` <a name="putExpression" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.putExpression"></a>

```java
public void putExpression(IResolvable OR java.util.List<LakeformationPermissionsLfTagPolicyExpression> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.putExpression.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression">LakeformationPermissionsLfTagPolicyExpression</a>>

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.expression">expression</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList">LakeformationPermissionsLfTagPolicyExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.expressionInput">expressionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression">LakeformationPermissionsLfTagPolicyExpression</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.expression"></a>

```java
public LakeformationPermissionsLfTagPolicyExpressionList getExpression();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpressionList">LakeformationPermissionsLfTagPolicyExpressionList</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.expressionInput"></a>

```java
public java.lang.Object getExpressionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyExpression">LakeformationPermissionsLfTagPolicyExpression</a>>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicyOutputReference.property.internalValue"></a>

```java
public LakeformationPermissionsLfTagPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsLfTagPolicy">LakeformationPermissionsLfTagPolicy</a>

---


### LakeformationPermissionsTableOutputReference <a name="LakeformationPermissionsTableOutputReference" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_permissions.LakeformationPermissionsTableOutputReference;

new LakeformationPermissionsTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resetWildcard">resetWildcard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetWildcard` <a name="resetWildcard" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.resetWildcard"></a>

```java
public void resetWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.wildcardInput">wildcardInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.wildcard">wildcard</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `wildcardInput`<sup>Optional</sup> <a name="wildcardInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.wildcardInput"></a>

```java
public java.lang.Object getWildcardInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.wildcard"></a>

```java
public java.lang.Object getWildcard();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableOutputReference.property.internalValue"></a>

```java
public LakeformationPermissionsTable getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTable">LakeformationPermissionsTable</a>

---


### LakeformationPermissionsTableWithColumnsOutputReference <a name="LakeformationPermissionsTableWithColumnsOutputReference" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_permissions.LakeformationPermissionsTableWithColumnsOutputReference;

new LakeformationPermissionsTableWithColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetColumnNames">resetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetExcludedColumnNames">resetExcludedColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetWildcard">resetWildcard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```

##### `resetColumnNames` <a name="resetColumnNames" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetColumnNames"></a>

```java
public void resetColumnNames()
```

##### `resetExcludedColumnNames` <a name="resetExcludedColumnNames" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetExcludedColumnNames"></a>

```java
public void resetExcludedColumnNames()
```

##### `resetWildcard` <a name="resetWildcard" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.resetWildcard"></a>

```java
public void resetWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.columnNamesInput">columnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNamesInput">excludedColumnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.wildcardInput">wildcardInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.columnNames">columnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNames">excludedColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.wildcard">wildcard</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `columnNamesInput`<sup>Optional</sup> <a name="columnNamesInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.columnNamesInput"></a>

```java
public java.util.List<java.lang.String> getColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `excludedColumnNamesInput`<sup>Optional</sup> <a name="excludedColumnNamesInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNamesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `wildcardInput`<sup>Optional</sup> <a name="wildcardInput" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.wildcardInput"></a>

```java
public java.lang.Object getWildcardInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.columnNames"></a>

```java
public java.util.List<java.lang.String> getColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `excludedColumnNames`<sup>Required</sup> <a name="excludedColumnNames" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.excludedColumnNames"></a>

```java
public java.util.List<java.lang.String> getExcludedColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.wildcard"></a>

```java
public java.lang.Object getWildcard();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumnsOutputReference.property.internalValue"></a>

```java
public LakeformationPermissionsTableWithColumns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationPermissions.LakeformationPermissionsTableWithColumns">LakeformationPermissionsTableWithColumns</a>

---



