# `lakeformationDataLakeSettings` Submodule <a name="`lakeformationDataLakeSettings` Submodule" id="@cdktf/provider-aws.lakeformationDataLakeSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationDataLakeSettings <a name="LakeformationDataLakeSettings" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings aws_lakeformation_data_lake_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_data_lake_settings.LakeformationDataLakeSettings;

LakeformationDataLakeSettings.Builder.create(Construct scope, java.lang.String id)
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
//  .admins(java.util.List<java.lang.String>)
//  .catalogId(java.lang.String)
//  .createDatabaseDefaultPermissions(IResolvable)
//  .createDatabaseDefaultPermissions(java.util.List<LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions>)
//  .createTableDefaultPermissions(IResolvable)
//  .createTableDefaultPermissions(java.util.List<LakeformationDataLakeSettingsCreateTableDefaultPermissions>)
//  .id(java.lang.String)
//  .trustedResourceOwners(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.admins">admins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#admins LakeformationDataLakeSettings#admins}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#catalog_id LakeformationDataLakeSettings#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.createDatabaseDefaultPermissions">createDatabaseDefaultPermissions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>></code> | create_database_default_permissions block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.createTableDefaultPermissions">createTableDefaultPermissions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>></code> | create_table_default_permissions block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#id LakeformationDataLakeSettings#id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.trustedResourceOwners">trustedResourceOwners</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#trusted_resource_owners LakeformationDataLakeSettings#trusted_resource_owners}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `admins`<sup>Optional</sup> <a name="admins" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.admins"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#admins LakeformationDataLakeSettings#admins}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.catalogId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#catalog_id LakeformationDataLakeSettings#catalog_id}.

---

##### `createDatabaseDefaultPermissions`<sup>Optional</sup> <a name="createDatabaseDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.createDatabaseDefaultPermissions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>>

create_database_default_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#create_database_default_permissions LakeformationDataLakeSettings#create_database_default_permissions}

---

##### `createTableDefaultPermissions`<sup>Optional</sup> <a name="createTableDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.createTableDefaultPermissions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>>

create_table_default_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#create_table_default_permissions LakeformationDataLakeSettings#create_table_default_permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#id LakeformationDataLakeSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `trustedResourceOwners`<sup>Optional</sup> <a name="trustedResourceOwners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.trustedResourceOwners"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#trusted_resource_owners LakeformationDataLakeSettings#trusted_resource_owners}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateDatabaseDefaultPermissions">putCreateDatabaseDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateTableDefaultPermissions">putCreateTableDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetAdmins">resetAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCreateDatabaseDefaultPermissions">resetCreateDatabaseDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCreateTableDefaultPermissions">resetCreateTableDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetTrustedResourceOwners">resetTrustedResourceOwners</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCreateDatabaseDefaultPermissions` <a name="putCreateDatabaseDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateDatabaseDefaultPermissions"></a>

```java
public void putCreateDatabaseDefaultPermissions(IResolvable OR java.util.List<LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateDatabaseDefaultPermissions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>>

---

##### `putCreateTableDefaultPermissions` <a name="putCreateTableDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateTableDefaultPermissions"></a>

```java
public void putCreateTableDefaultPermissions(IResolvable OR java.util.List<LakeformationDataLakeSettingsCreateTableDefaultPermissions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateTableDefaultPermissions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>>

---

##### `resetAdmins` <a name="resetAdmins" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetAdmins"></a>

```java
public void resetAdmins()
```

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCatalogId"></a>

```java
public void resetCatalogId()
```

##### `resetCreateDatabaseDefaultPermissions` <a name="resetCreateDatabaseDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCreateDatabaseDefaultPermissions"></a>

```java
public void resetCreateDatabaseDefaultPermissions()
```

##### `resetCreateTableDefaultPermissions` <a name="resetCreateTableDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCreateTableDefaultPermissions"></a>

```java
public void resetCreateTableDefaultPermissions()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetId"></a>

```java
public void resetId()
```

##### `resetTrustedResourceOwners` <a name="resetTrustedResourceOwners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetTrustedResourceOwners"></a>

```java
public void resetTrustedResourceOwners()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_data_lake_settings.LakeformationDataLakeSettings;

LakeformationDataLakeSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_data_lake_settings.LakeformationDataLakeSettings;

LakeformationDataLakeSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_data_lake_settings.LakeformationDataLakeSettings;

LakeformationDataLakeSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createDatabaseDefaultPermissions">createDatabaseDefaultPermissions</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createTableDefaultPermissions">createTableDefaultPermissions</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList">LakeformationDataLakeSettingsCreateTableDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.adminsInput">adminsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createDatabaseDefaultPermissionsInput">createDatabaseDefaultPermissionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createTableDefaultPermissionsInput">createTableDefaultPermissionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.trustedResourceOwnersInput">trustedResourceOwnersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.admins">admins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.trustedResourceOwners">trustedResourceOwners</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createDatabaseDefaultPermissions`<sup>Required</sup> <a name="createDatabaseDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createDatabaseDefaultPermissions"></a>

```java
public LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList getCreateDatabaseDefaultPermissions();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList</a>

---

##### `createTableDefaultPermissions`<sup>Required</sup> <a name="createTableDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createTableDefaultPermissions"></a>

```java
public LakeformationDataLakeSettingsCreateTableDefaultPermissionsList getCreateTableDefaultPermissions();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList">LakeformationDataLakeSettingsCreateTableDefaultPermissionsList</a>

---

##### `adminsInput`<sup>Optional</sup> <a name="adminsInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.adminsInput"></a>

```java
public java.util.List<java.lang.String> getAdminsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `createDatabaseDefaultPermissionsInput`<sup>Optional</sup> <a name="createDatabaseDefaultPermissionsInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createDatabaseDefaultPermissionsInput"></a>

```java
public java.lang.Object getCreateDatabaseDefaultPermissionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>>

---

##### `createTableDefaultPermissionsInput`<sup>Optional</sup> <a name="createTableDefaultPermissionsInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createTableDefaultPermissionsInput"></a>

```java
public java.lang.Object getCreateTableDefaultPermissionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `trustedResourceOwnersInput`<sup>Optional</sup> <a name="trustedResourceOwnersInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.trustedResourceOwnersInput"></a>

```java
public java.util.List<java.lang.String> getTrustedResourceOwnersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `admins`<sup>Required</sup> <a name="admins" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.admins"></a>

```java
public java.util.List<java.lang.String> getAdmins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `trustedResourceOwners`<sup>Required</sup> <a name="trustedResourceOwners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.trustedResourceOwners"></a>

```java
public java.util.List<java.lang.String> getTrustedResourceOwners();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationDataLakeSettingsConfig <a name="LakeformationDataLakeSettingsConfig" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_data_lake_settings.LakeformationDataLakeSettingsConfig;

LakeformationDataLakeSettingsConfig.builder()
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
//  .admins(java.util.List<java.lang.String>)
//  .catalogId(java.lang.String)
//  .createDatabaseDefaultPermissions(IResolvable)
//  .createDatabaseDefaultPermissions(java.util.List<LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions>)
//  .createTableDefaultPermissions(IResolvable)
//  .createTableDefaultPermissions(java.util.List<LakeformationDataLakeSettingsCreateTableDefaultPermissions>)
//  .id(java.lang.String)
//  .trustedResourceOwners(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.admins">admins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#admins LakeformationDataLakeSettings#admins}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#catalog_id LakeformationDataLakeSettings#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.createDatabaseDefaultPermissions">createDatabaseDefaultPermissions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>></code> | create_database_default_permissions block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.createTableDefaultPermissions">createTableDefaultPermissions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>></code> | create_table_default_permissions block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#id LakeformationDataLakeSettings#id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.trustedResourceOwners">trustedResourceOwners</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#trusted_resource_owners LakeformationDataLakeSettings#trusted_resource_owners}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `admins`<sup>Optional</sup> <a name="admins" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.admins"></a>

```java
public java.util.List<java.lang.String> getAdmins();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#admins LakeformationDataLakeSettings#admins}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#catalog_id LakeformationDataLakeSettings#catalog_id}.

---

##### `createDatabaseDefaultPermissions`<sup>Optional</sup> <a name="createDatabaseDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.createDatabaseDefaultPermissions"></a>

```java
public java.lang.Object getCreateDatabaseDefaultPermissions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>>

create_database_default_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#create_database_default_permissions LakeformationDataLakeSettings#create_database_default_permissions}

---

##### `createTableDefaultPermissions`<sup>Optional</sup> <a name="createTableDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.createTableDefaultPermissions"></a>

```java
public java.lang.Object getCreateTableDefaultPermissions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>>

create_table_default_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#create_table_default_permissions LakeformationDataLakeSettings#create_table_default_permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#id LakeformationDataLakeSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `trustedResourceOwners`<sup>Optional</sup> <a name="trustedResourceOwners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.trustedResourceOwners"></a>

```java
public java.util.List<java.lang.String> getTrustedResourceOwners();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#trusted_resource_owners LakeformationDataLakeSettings#trusted_resource_owners}.

---

### LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions <a name="LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_data_lake_settings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions;

LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.builder()
//  .permissions(java.util.List<java.lang.String>)
//  .principal(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.property.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}.

---

### LakeformationDataLakeSettingsCreateTableDefaultPermissions <a name="LakeformationDataLakeSettingsCreateTableDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_data_lake_settings.LakeformationDataLakeSettingsCreateTableDefaultPermissions;

LakeformationDataLakeSettingsCreateTableDefaultPermissions.builder()
//  .permissions(java.util.List<java.lang.String>)
//  .principal(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions.property.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList <a name="LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_data_lake_settings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList;

new LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get"></a>

```java
public LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>>

---


### LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference <a name="LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_data_lake_settings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference;

new LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resetPermissions"></a>

```java
public void resetPermissions()
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resetPrincipal"></a>

```java
public void resetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissionsInput"></a>

```java
public java.util.List<java.lang.String> getPermissionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a> OR com.hashicorp.cdktf.IResolvable

---


### LakeformationDataLakeSettingsCreateTableDefaultPermissionsList <a name="LakeformationDataLakeSettingsCreateTableDefaultPermissionsList" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_data_lake_settings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList;

new LakeformationDataLakeSettingsCreateTableDefaultPermissionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get"></a>

```java
public LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>>

---


### LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference <a name="LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lakeformation_data_lake_settings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference;

new LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resetPermissions"></a>

```java
public void resetPermissions()
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resetPrincipal"></a>

```java
public void resetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissionsInput"></a>

```java
public java.util.List<java.lang.String> getPermissionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a> OR com.hashicorp.cdktf.IResolvable

---



