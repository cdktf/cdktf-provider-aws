# `glueCatalogDatabase` Submodule <a name="`glueCatalogDatabase` Submodule" id="@cdktf/provider-aws.glueCatalogDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCatalogDatabase <a name="GlueCatalogDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database aws_glue_catalog_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_catalog_database.GlueCatalogDatabase;

GlueCatalogDatabase.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .catalogId(java.lang.String)
//  .createTableDefaultPermission(IResolvable)
//  .createTableDefaultPermission(java.util.List<GlueCatalogDatabaseCreateTableDefaultPermission>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .locationUri(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .targetDatabase(GlueCatalogDatabaseTargetDatabase)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#name GlueCatalogDatabase#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.createTableDefaultPermission">createTableDefaultPermission</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>></code> | create_table_default_permission block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#description GlueCatalogDatabase#description}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#id GlueCatalogDatabase#id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.locationUri">locationUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#location_uri GlueCatalogDatabase#location_uri}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#parameters GlueCatalogDatabase#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.targetDatabase">targetDatabase</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a></code> | target_database block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#name GlueCatalogDatabase#name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.catalogId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}.

---

##### `createTableDefaultPermission`<sup>Optional</sup> <a name="createTableDefaultPermission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.createTableDefaultPermission"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>>

create_table_default_permission block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#create_table_default_permission GlueCatalogDatabase#create_table_default_permission}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#description GlueCatalogDatabase#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#id GlueCatalogDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationUri`<sup>Optional</sup> <a name="locationUri" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.locationUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#location_uri GlueCatalogDatabase#location_uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#parameters GlueCatalogDatabase#parameters}.

---

##### `targetDatabase`<sup>Optional</sup> <a name="targetDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.targetDatabase"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a>

target_database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#target_database GlueCatalogDatabase#target_database}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putCreateTableDefaultPermission">putCreateTableDefaultPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putTargetDatabase">putTargetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetCreateTableDefaultPermission">resetCreateTableDefaultPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetLocationUri">resetLocationUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetTargetDatabase">resetTargetDatabase</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCreateTableDefaultPermission` <a name="putCreateTableDefaultPermission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putCreateTableDefaultPermission"></a>

```java
public void putCreateTableDefaultPermission(IResolvable OR java.util.List<GlueCatalogDatabaseCreateTableDefaultPermission> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putCreateTableDefaultPermission.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>>

---

##### `putTargetDatabase` <a name="putTargetDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putTargetDatabase"></a>

```java
public void putTargetDatabase(GlueCatalogDatabaseTargetDatabase value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putTargetDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a>

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetCatalogId"></a>

```java
public void resetCatalogId()
```

##### `resetCreateTableDefaultPermission` <a name="resetCreateTableDefaultPermission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetCreateTableDefaultPermission"></a>

```java
public void resetCreateTableDefaultPermission()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetId"></a>

```java
public void resetId()
```

##### `resetLocationUri` <a name="resetLocationUri" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetLocationUri"></a>

```java
public void resetLocationUri()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetTargetDatabase` <a name="resetTargetDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetTargetDatabase"></a>

```java
public void resetTargetDatabase()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_catalog_database.GlueCatalogDatabase;

GlueCatalogDatabase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_catalog_database.GlueCatalogDatabase;

GlueCatalogDatabase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_catalog_database.GlueCatalogDatabase;

GlueCatalogDatabase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.createTableDefaultPermission">createTableDefaultPermission</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList">GlueCatalogDatabaseCreateTableDefaultPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.targetDatabase">targetDatabase</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference">GlueCatalogDatabaseTargetDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.createTableDefaultPermissionInput">createTableDefaultPermissionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.locationUriInput">locationUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.targetDatabaseInput">targetDatabaseInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.locationUri">locationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createTableDefaultPermission`<sup>Required</sup> <a name="createTableDefaultPermission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.createTableDefaultPermission"></a>

```java
public GlueCatalogDatabaseCreateTableDefaultPermissionList getCreateTableDefaultPermission();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList">GlueCatalogDatabaseCreateTableDefaultPermissionList</a>

---

##### `targetDatabase`<sup>Required</sup> <a name="targetDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.targetDatabase"></a>

```java
public GlueCatalogDatabaseTargetDatabaseOutputReference getTargetDatabase();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference">GlueCatalogDatabaseTargetDatabaseOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `createTableDefaultPermissionInput`<sup>Optional</sup> <a name="createTableDefaultPermissionInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.createTableDefaultPermissionInput"></a>

```java
public java.lang.Object getCreateTableDefaultPermissionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationUriInput`<sup>Optional</sup> <a name="locationUriInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.locationUriInput"></a>

```java
public java.lang.String getLocationUriInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetDatabaseInput`<sup>Optional</sup> <a name="targetDatabaseInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.targetDatabaseInput"></a>

```java
public GlueCatalogDatabaseTargetDatabase getTargetDatabaseInput();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.locationUri"></a>

```java
public java.lang.String getLocationUri();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCatalogDatabaseConfig <a name="GlueCatalogDatabaseConfig" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_catalog_database.GlueCatalogDatabaseConfig;

GlueCatalogDatabaseConfig.builder()
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
    .name(java.lang.String)
//  .catalogId(java.lang.String)
//  .createTableDefaultPermission(IResolvable)
//  .createTableDefaultPermission(java.util.List<GlueCatalogDatabaseCreateTableDefaultPermission>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .locationUri(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .targetDatabase(GlueCatalogDatabaseTargetDatabase)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#name GlueCatalogDatabase#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.createTableDefaultPermission">createTableDefaultPermission</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>></code> | create_table_default_permission block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#description GlueCatalogDatabase#description}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#id GlueCatalogDatabase#id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.locationUri">locationUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#location_uri GlueCatalogDatabase#location_uri}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#parameters GlueCatalogDatabase#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.targetDatabase">targetDatabase</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a></code> | target_database block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#name GlueCatalogDatabase#name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}.

---

##### `createTableDefaultPermission`<sup>Optional</sup> <a name="createTableDefaultPermission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.createTableDefaultPermission"></a>

```java
public java.lang.Object getCreateTableDefaultPermission();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>>

create_table_default_permission block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#create_table_default_permission GlueCatalogDatabase#create_table_default_permission}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#description GlueCatalogDatabase#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#id GlueCatalogDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationUri`<sup>Optional</sup> <a name="locationUri" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.locationUri"></a>

```java
public java.lang.String getLocationUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#location_uri GlueCatalogDatabase#location_uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#parameters GlueCatalogDatabase#parameters}.

---

##### `targetDatabase`<sup>Optional</sup> <a name="targetDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.targetDatabase"></a>

```java
public GlueCatalogDatabaseTargetDatabase getTargetDatabase();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a>

target_database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#target_database GlueCatalogDatabase#target_database}

---

### GlueCatalogDatabaseCreateTableDefaultPermission <a name="GlueCatalogDatabaseCreateTableDefaultPermission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_catalog_database.GlueCatalogDatabaseCreateTableDefaultPermission;

GlueCatalogDatabaseCreateTableDefaultPermission.builder()
//  .permissions(java.util.List<java.lang.String>)
//  .principal(GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#permissions GlueCatalogDatabase#permissions}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission.property.principal">principal</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a></code> | principal block. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#permissions GlueCatalogDatabase#permissions}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission.property.principal"></a>

```java
public GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal getPrincipal();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a>

principal block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#principal GlueCatalogDatabase#principal}

---

### GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal <a name="GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_catalog_database.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal;

GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal.builder()
//  .dataLakePrincipalIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#data_lake_principal_identifier GlueCatalogDatabase#data_lake_principal_identifier}. |

---

##### `dataLakePrincipalIdentifier`<sup>Optional</sup> <a name="dataLakePrincipalIdentifier" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal.property.dataLakePrincipalIdentifier"></a>

```java
public java.lang.String getDataLakePrincipalIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#data_lake_principal_identifier GlueCatalogDatabase#data_lake_principal_identifier}.

---

### GlueCatalogDatabaseTargetDatabase <a name="GlueCatalogDatabaseTargetDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_catalog_database.GlueCatalogDatabaseTargetDatabase;

GlueCatalogDatabaseTargetDatabase.builder()
    .catalogId(java.lang.String)
    .databaseName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#database_name GlueCatalogDatabase#database_name}. |

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database#database_name GlueCatalogDatabase#database_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCatalogDatabaseCreateTableDefaultPermissionList <a name="GlueCatalogDatabaseCreateTableDefaultPermissionList" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_catalog_database.GlueCatalogDatabaseCreateTableDefaultPermissionList;

new GlueCatalogDatabaseCreateTableDefaultPermissionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.get"></a>

```java
public GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>>

---


### GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference <a name="GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_catalog_database.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference;

new GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipal` <a name="putPrincipal" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.putPrincipal"></a>

```java
public void putPrincipal(GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a>

---

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resetPermissions"></a>

```java
public void resetPermissions()
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resetPrincipal"></a>

```java
public void resetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.principalInput">principalInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.principal"></a>

```java
public GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference getPrincipal();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference</a>

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.permissionsInput"></a>

```java
public java.util.List<java.lang.String> getPermissionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.principalInput"></a>

```java
public GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal getPrincipalInput();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a> OR com.hashicorp.cdktf.IResolvable

---


### GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference <a name="GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_catalog_database.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference;

new GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.resetDataLakePrincipalIdentifier">resetDataLakePrincipalIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataLakePrincipalIdentifier` <a name="resetDataLakePrincipalIdentifier" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.resetDataLakePrincipalIdentifier"></a>

```java
public void resetDataLakePrincipalIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.dataLakePrincipalIdentifierInput">dataLakePrincipalIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataLakePrincipalIdentifierInput`<sup>Optional</sup> <a name="dataLakePrincipalIdentifierInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.dataLakePrincipalIdentifierInput"></a>

```java
public java.lang.String getDataLakePrincipalIdentifierInput();
```

- *Type:* java.lang.String

---

##### `dataLakePrincipalIdentifier`<sup>Required</sup> <a name="dataLakePrincipalIdentifier" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```java
public java.lang.String getDataLakePrincipalIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.internalValue"></a>

```java
public GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a>

---


### GlueCatalogDatabaseTargetDatabaseOutputReference <a name="GlueCatalogDatabaseTargetDatabaseOutputReference" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_catalog_database.GlueCatalogDatabaseTargetDatabaseOutputReference;

new GlueCatalogDatabaseTargetDatabaseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.internalValue"></a>

```java
public GlueCatalogDatabaseTargetDatabase getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a>

---



