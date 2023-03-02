# `dataAwsNeptuneOrderableDbInstance` Submodule <a name="`dataAwsNeptuneOrderableDbInstance` Submodule" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsNeptuneOrderableDbInstance <a name="DataAwsNeptuneOrderableDbInstance" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance aws_neptune_orderable_db_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_neptune_orderable_db_instance.DataAwsNeptuneOrderableDbInstance;

DataAwsNeptuneOrderableDbInstance.Builder.create(Construct scope, java.lang.String id)
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
//  .engine(java.lang.String)
//  .engineVersion(java.lang.String)
//  .id(java.lang.String)
//  .instanceClass(java.lang.String)
//  .licenseModel(java.lang.String)
//  .preferredInstanceClasses(java.util.List<java.lang.String>)
//  .vpc(java.lang.Boolean)
//  .vpc(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#engine DataAwsNeptuneOrderableDbInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#engine_version DataAwsNeptuneOrderableDbInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#id DataAwsNeptuneOrderableDbInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.instanceClass">instanceClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#instance_class DataAwsNeptuneOrderableDbInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#license_model DataAwsNeptuneOrderableDbInstance#license_model}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.preferredInstanceClasses">preferredInstanceClasses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#preferred_instance_classes DataAwsNeptuneOrderableDbInstance#preferred_instance_classes}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.vpc">vpc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#vpc DataAwsNeptuneOrderableDbInstance#vpc}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.engine"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#engine DataAwsNeptuneOrderableDbInstance#engine}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#engine_version DataAwsNeptuneOrderableDbInstance#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#id DataAwsNeptuneOrderableDbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceClass`<sup>Optional</sup> <a name="instanceClass" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.instanceClass"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#instance_class DataAwsNeptuneOrderableDbInstance#instance_class}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.licenseModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#license_model DataAwsNeptuneOrderableDbInstance#license_model}.

---

##### `preferredInstanceClasses`<sup>Optional</sup> <a name="preferredInstanceClasses" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.preferredInstanceClasses"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#preferred_instance_classes DataAwsNeptuneOrderableDbInstance#preferred_instance_classes}.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.Initializer.parameter.vpc"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#vpc DataAwsNeptuneOrderableDbInstance#vpc}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetInstanceClass">resetInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetPreferredInstanceClasses">resetPreferredInstanceClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetVpc">resetVpc</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetEngine` <a name="resetEngine" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetEngine"></a>

```java
public void resetEngine()
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetEngineVersion"></a>

```java
public void resetEngineVersion()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceClass` <a name="resetInstanceClass" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetInstanceClass"></a>

```java
public void resetInstanceClass()
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetLicenseModel"></a>

```java
public void resetLicenseModel()
```

##### `resetPreferredInstanceClasses` <a name="resetPreferredInstanceClasses" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetPreferredInstanceClasses"></a>

```java
public void resetPreferredInstanceClasses()
```

##### `resetVpc` <a name="resetVpc" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.resetVpc"></a>

```java
public void resetVpc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_neptune_orderable_db_instance.DataAwsNeptuneOrderableDbInstance;

DataAwsNeptuneOrderableDbInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_neptune_orderable_db_instance.DataAwsNeptuneOrderableDbInstance;

DataAwsNeptuneOrderableDbInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_neptune_orderable_db_instance.DataAwsNeptuneOrderableDbInstance;

DataAwsNeptuneOrderableDbInstance.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxIopsPerDbInstance">maxIopsPerDbInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxIopsPerGib">maxIopsPerGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxStorageSize">maxStorageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minIopsPerDbInstance">minIopsPerDbInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minIopsPerGib">minIopsPerGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minStorageSize">minStorageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.multiAzCapable">multiAzCapable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.readReplicaCapable">readReplicaCapable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsEnhancedMonitoring">supportsEnhancedMonitoring</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsIamDatabaseAuthentication">supportsIamDatabaseAuthentication</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsIops">supportsIops</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsPerformanceInsights">supportsPerformanceInsights</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsStorageEncryption">supportsStorageEncryption</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.instanceClassInput">instanceClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.preferredInstanceClassesInput">preferredInstanceClassesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.vpcInput">vpcInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.instanceClass">instanceClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.preferredInstanceClasses">preferredInstanceClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.vpc">vpc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxIopsPerDbInstance`<sup>Required</sup> <a name="maxIopsPerDbInstance" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxIopsPerDbInstance"></a>

```java
public java.lang.Number getMaxIopsPerDbInstance();
```

- *Type:* java.lang.Number

---

##### `maxIopsPerGib`<sup>Required</sup> <a name="maxIopsPerGib" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxIopsPerGib"></a>

```java
public java.lang.Number getMaxIopsPerGib();
```

- *Type:* java.lang.Number

---

##### `maxStorageSize`<sup>Required</sup> <a name="maxStorageSize" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.maxStorageSize"></a>

```java
public java.lang.Number getMaxStorageSize();
```

- *Type:* java.lang.Number

---

##### `minIopsPerDbInstance`<sup>Required</sup> <a name="minIopsPerDbInstance" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minIopsPerDbInstance"></a>

```java
public java.lang.Number getMinIopsPerDbInstance();
```

- *Type:* java.lang.Number

---

##### `minIopsPerGib`<sup>Required</sup> <a name="minIopsPerGib" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minIopsPerGib"></a>

```java
public java.lang.Number getMinIopsPerGib();
```

- *Type:* java.lang.Number

---

##### `minStorageSize`<sup>Required</sup> <a name="minStorageSize" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.minStorageSize"></a>

```java
public java.lang.Number getMinStorageSize();
```

- *Type:* java.lang.Number

---

##### `multiAzCapable`<sup>Required</sup> <a name="multiAzCapable" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.multiAzCapable"></a>

```java
public IResolvable getMultiAzCapable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `readReplicaCapable`<sup>Required</sup> <a name="readReplicaCapable" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.readReplicaCapable"></a>

```java
public IResolvable getReadReplicaCapable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `supportsEnhancedMonitoring`<sup>Required</sup> <a name="supportsEnhancedMonitoring" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsEnhancedMonitoring"></a>

```java
public IResolvable getSupportsEnhancedMonitoring();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `supportsIamDatabaseAuthentication`<sup>Required</sup> <a name="supportsIamDatabaseAuthentication" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsIamDatabaseAuthentication"></a>

```java
public IResolvable getSupportsIamDatabaseAuthentication();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `supportsIops`<sup>Required</sup> <a name="supportsIops" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsIops"></a>

```java
public IResolvable getSupportsIops();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `supportsPerformanceInsights`<sup>Required</sup> <a name="supportsPerformanceInsights" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsPerformanceInsights"></a>

```java
public IResolvable getSupportsPerformanceInsights();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `supportsStorageEncryption`<sup>Required</sup> <a name="supportsStorageEncryption" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.supportsStorageEncryption"></a>

```java
public IResolvable getSupportsStorageEncryption();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceClassInput`<sup>Optional</sup> <a name="instanceClassInput" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.instanceClassInput"></a>

```java
public java.lang.String getInstanceClassInput();
```

- *Type:* java.lang.String

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `preferredInstanceClassesInput`<sup>Optional</sup> <a name="preferredInstanceClassesInput" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.preferredInstanceClassesInput"></a>

```java
public java.util.List<java.lang.String> getPreferredInstanceClassesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.vpcInput"></a>

```java
public java.lang.Object getVpcInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceClass`<sup>Required</sup> <a name="instanceClass" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.instanceClass"></a>

```java
public java.lang.String getInstanceClass();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `preferredInstanceClasses`<sup>Required</sup> <a name="preferredInstanceClasses" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.preferredInstanceClasses"></a>

```java
public java.util.List<java.lang.String> getPreferredInstanceClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.vpc"></a>

```java
public java.lang.Object getVpc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsNeptuneOrderableDbInstanceConfig <a name="DataAwsNeptuneOrderableDbInstanceConfig" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_neptune_orderable_db_instance.DataAwsNeptuneOrderableDbInstanceConfig;

DataAwsNeptuneOrderableDbInstanceConfig.builder()
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
//  .engine(java.lang.String)
//  .engineVersion(java.lang.String)
//  .id(java.lang.String)
//  .instanceClass(java.lang.String)
//  .licenseModel(java.lang.String)
//  .preferredInstanceClasses(java.util.List<java.lang.String>)
//  .vpc(java.lang.Boolean)
//  .vpc(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#engine DataAwsNeptuneOrderableDbInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#engine_version DataAwsNeptuneOrderableDbInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#id DataAwsNeptuneOrderableDbInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.instanceClass">instanceClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#instance_class DataAwsNeptuneOrderableDbInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#license_model DataAwsNeptuneOrderableDbInstance#license_model}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.preferredInstanceClasses">preferredInstanceClasses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#preferred_instance_classes DataAwsNeptuneOrderableDbInstance#preferred_instance_classes}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.vpc">vpc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#vpc DataAwsNeptuneOrderableDbInstance#vpc}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#engine DataAwsNeptuneOrderableDbInstance#engine}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#engine_version DataAwsNeptuneOrderableDbInstance#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#id DataAwsNeptuneOrderableDbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceClass`<sup>Optional</sup> <a name="instanceClass" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.instanceClass"></a>

```java
public java.lang.String getInstanceClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#instance_class DataAwsNeptuneOrderableDbInstance#instance_class}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#license_model DataAwsNeptuneOrderableDbInstance#license_model}.

---

##### `preferredInstanceClasses`<sup>Optional</sup> <a name="preferredInstanceClasses" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.preferredInstanceClasses"></a>

```java
public java.util.List<java.lang.String> getPreferredInstanceClasses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#preferred_instance_classes DataAwsNeptuneOrderableDbInstance#preferred_instance_classes}.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-aws.dataAwsNeptuneOrderableDbInstance.DataAwsNeptuneOrderableDbInstanceConfig.property.vpc"></a>

```java
public java.lang.Object getVpc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance#vpc DataAwsNeptuneOrderableDbInstance#vpc}.

---



